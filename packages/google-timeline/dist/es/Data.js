"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryActivities = exports.getModuleName = exports.getFields = exports.getInfo = void 0;

var _activityMockup = _interopRequireDefault(require("./activityMockup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";

var getInfo = function getInfo() {
  return ["queryActivities"];
};

exports.getInfo = getInfo;

var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivities":
      console.log("FIELDS...FOUND");
      fields = _activityMockup["default"][0].split(",");
      break;

    default:
      fields = [];
  }

  return fields;
};

exports.getFields = getFields;

var getModuleName = function getModuleName() {
  return "GoogleTimeline";
};

exports.getModuleName = getModuleName;

var queryActivities = function queryActivities(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID); //console.log("QUERY UUID", uuid);
  //console.log("QUERY EX", executionID);

  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _activityMockup["default"]
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryActivities = queryActivities;