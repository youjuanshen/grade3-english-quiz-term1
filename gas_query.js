/**
 * Google Apps Script - 成绩查询 API
 * 部署为 Web App 后，teacher_term1.html 可调用此接口查询缺考情况
 *
 * 部署方式：
 * 1. 在 Google Sheet 里点击 「扩展程序」→「Apps Script」
 * 2. 把这段代码粘贴进去（替换原有内容）
 * 3. 点击 「部署」→「新建部署」→类型选「Web 应用」
 * 4. 执行身份：「我自己」
 * 5. 访问权限：「所有人」（包括匿名）
 * 6. 部署，复制得到的 Web App URL 填到 teacher_term1.html 里
 */

var SHEET_NAME = '学生每周测验';

function doGet(e) {
  var course = (e && e.parameter && e.parameter.course) ? e.parameter.course.toLowerCase() : '';

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    return jsonResponse({ code: -1, msg: 'Sheet not found: ' + SHEET_NAME });
  }

  var data = sheet.getDataRange().getValues();
  if (data.length < 2) {
    return jsonResponse({ code: 0, data: [] });
  }

  // 获取表头索引
  var headers = data[0].map(function(h) { return String(h).trim(); });
  var idxName   = headers.indexOf('姓名');
  var idxCourse = headers.indexOf('课程');
  var idxTime   = headers.indexOf('时间');

  if (idxName < 0 || idxCourse < 0) {
    return jsonResponse({ code: -1, msg: '表头不完整，需要含"姓名"和"课程"列' });
  }

  var results = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var rawName   = String(row[idxName]   || '').trim();
    var rawCourse = String(row[idxCourse] || '').trim().toLowerCase();
    var rawTime   = idxTime >= 0 ? String(row[idxTime] || '') : '';

    if (!rawName) continue; // 跳过空行

    // 课程智能匹配（同飞书逻辑）
    var unitMatch   = rawCourse.match(/unit\s*(\d)/i);
    var lessonMatch = rawCourse.match(/lesson\s*(\d)/i);
    var convertedCourse = '';
    if (unitMatch && lessonMatch) {
      convertedCourse = 'u' + unitMatch[1] + 'l' + lessonMatch[1];
    } else if (rawCourse.indexOf('review 1') >= 0) {
      convertedCourse = 'review 1';
    } else if (rawCourse.indexOf('review 2') >= 0) {
      convertedCourse = 'review 2';
    } else if (rawCourse.indexOf('期末') >= 0) {
      convertedCourse = '期末测试';
    }

    var matched = false;
    if (course === '') {
      matched = true; // 不过滤课程
    } else if (convertedCourse && convertedCourse === course) {
      matched = true;
    } else if (rawCourse.indexOf(course) >= 0) {
      matched = true; // 原始文本模糊匹配
    }

    if (matched) {
      // 提取纯汉字姓名（去掉座位号前缀如 "3. 张睿渊"）
      var cleanNameMatch = rawName.match(/[\u4e00-\u9fa5\u00b7]+$/);
      var cleanName = cleanNameMatch ? cleanNameMatch[0] : rawName;

      results.push({
        studentName: cleanName,
        course: String(row[idxCourse] || ''),
        time: rawTime
      });
    }
  }

  return jsonResponse({ code: 0, data: results });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
