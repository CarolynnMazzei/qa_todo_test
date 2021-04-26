"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
var chromedriver = require("chromedriver");
var driver = new selenium_webdriver_1.Builder()
    .withCapabilities(selenium_webdriver_1.Capabilities.chrome())
    .build();
var TodoPage = /** @class */ (function () {
    function TodoPage(driver) {
        //I copied most of these from firstTest.test.ts
        this.todoInput = selenium_webdriver_1.By.className("new-todo");
        this.todos = selenium_webdriver_1.By.css("li.todo");
        this.todoLabel = selenium_webdriver_1.By.css("label");
        this.todoComplete = selenium_webdriver_1.By.css("input");
        this.todoStar = selenium_webdriver_1.By.className("star");
        this.starBanner = selenium_webdriver_1.By.className("starred");
        this.todoCount = selenium_webdriver_1.By.className("todo-count");
        this.clearCompletedButton = selenium_webdriver_1.By.css("button.clear-completed");
        this.url = "https://devmountain.github.io/qa_todos/";
        this.driver = driver;
    }
    return TodoPage;
}());
var tp = new TodoPage(driver);
describe("the todo app", function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get(tp.url)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("can add a todo", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(tp.todoInput))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do\n")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("can remove a todo", function () { return __awaiter(void 0, void 0, void 0, function () {
        var myTodos, myTodo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.findElements(tp.todos)];
                case 1:
                    myTodos = _a.sent();
                    return [4 /*yield*/, myTodos
                            .filter(function (todo) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, todo.findElement(tp.todoLabel)];
                                    case 1: return [4 /*yield*/, (_a.sent()).getText()];
                                    case 2:
                                        (_a.sent()) ==
                                            "Test To-Do";
                                        return [2 /*return*/];
                                }
                            });
                        }); })[0]
                            .findElement(tp.todoComplete)
                            .click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.clearCompletedButton)];
                case 3: return [4 /*yield*/, (_a.sent()).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.todos)];
                case 5:
                    myTodos = _a.sent();
                    return [4 /*yield*/, myTodos.filter(function (todo) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, todo.findElement(tp.todoLabel)];
                                    case 1: return [4 /*yield*/, (_a.sent()).getText()];
                                    case 2:
                                        (_a.sent()) == "Test To-Do";
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 6:
                    myTodo = _a.sent();
                    expect(myTodo.length).toEqual(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can mark a todo with a star", function () { return __awaiter(void 0, void 0, void 0, function () {
        var startingStars, endingStars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(tp.todoInput))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.starBanner)];
                case 2: return [4 /*yield*/, (_a.sent()).length];
                case 3:
                    startingStars = _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do\n")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.todos)];
                case 5: return [4 /*yield*/, (_a.sent())
                        .filter(function (todo) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, todo.findElement(tp.todoLabel)];
                                case 1: return [4 /*yield*/, (_a.sent()).getText()];
                                case 2:
                                    (_a.sent()) ==
                                        "Test To-Do";
                                    return [2 /*return*/];
                            }
                        });
                    }); })[0]
                        .findElement(tp.todoStar)
                        .click()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.starBanner)];
                case 7: return [4 /*yield*/, (_a.sent()).length];
                case 8:
                    endingStars = _a.sent();
                    expect(endingStars).toBeGreaterThan(startingStars);
                    return [2 /*return*/];
            }
        });
    }); });
    it("has the right number of todos listed", function () { return __awaiter(void 0, void 0, void 0, function () {
        var startingTodoCount, endingTodoCount, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(tp.todoInput))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.todos)];
                case 2: return [4 /*yield*/, (_a.sent()).length];
                case 3:
                    startingTodoCount = _a.sent();
                    // adding 5 todos here
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do 1\n")];
                case 4:
                    // adding 5 todos here
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do 2\n")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do 3\n")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do 4\n")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoInput).sendKeys("Test To-Do 5\n")];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(tp.todos)];
                case 9: return [4 /*yield*/, (_a.sent()).length];
                case 10:
                    endingTodoCount = _a.sent();
                    return [4 /*yield*/, driver.findElement(tp.todoCount)];
                case 11: return [4 /*yield*/, (_a.sent()).getText()];
                case 12:
                    message = _a.sent();
                    expect(endingTodoCount - startingTodoCount).toBe(5);
                    expect(message).toBe(endingTodoCount + " items left");
                    return [2 /*return*/];
            }
        });
    }); });
});
