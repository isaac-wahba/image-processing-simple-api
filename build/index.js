"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use('/api', index_1.default);
app.use(function (req, res) {
    res.send('<p>Resource Not found</p>');
});
app.listen(PORT, function () {
    console.log("Server is starting at prot:".concat(PORT));
});
exports.default = app;
