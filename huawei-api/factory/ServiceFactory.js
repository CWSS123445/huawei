
        class ServiceFactory {
            static createBaseService(){ 
                    return Reflect.construct(require("../services/BaseService.js"), []);
                }
static createCarService(){ 
                    return Reflect.construct(require("../services/CarService.js"), []);
                }
static createComputerService(){ 
                    return Reflect.construct(require("../services/ComputerService.js"), []);
                }
static createMateService(){ 
                    return Reflect.construct(require("../services/MateService.js"), []);
                }
static createPhoneService(){ 
                    return Reflect.construct(require("../services/PhoneService.js"), []);
                }
        }

        module.exports = ServiceFactory;
    