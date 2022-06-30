"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let TasksService = TasksService_1 = class TasksService {
    constructor() {
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    handleCron() {
        this.logger.debug('Called when the second is 45');
    }
    handleInterval() {
        this.logger.debug('Called every 10 seconds');
    }
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }
};
__decorate([
    (0, schedule_1.Cron)('45 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "handleCron", null);
__decorate([
    (0, schedule_1.Interval)(10000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "handleInterval", null);
__decorate([
    (0, schedule_1.Timeout)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "handleTimeout", null);
TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map