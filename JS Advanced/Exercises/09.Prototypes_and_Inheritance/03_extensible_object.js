function returnExtensibleObject() {
    const obj = {
        extend: function (template) {
            const objProto = Object.getPrototypeOf(this);
            const objContext = this;

            for (const templateKey in template) {
                const toAdd = template[templateKey];
                if (typeof toAdd === 'function') {
                    addFuncToProto(templateKey, toAdd);
                } else {
                    addProperty(templateKey, toAdd, this);
                }
            }

            function addFuncToProto(funcName, func) {
                objProto[funcName] = func;
            }

            function addProperty(propName, prop) {
                objContext[propName] = prop;
            }
        }
    };

    return obj;
}