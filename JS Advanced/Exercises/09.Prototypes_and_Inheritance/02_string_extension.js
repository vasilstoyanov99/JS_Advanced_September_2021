(function extendStringPrototype() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }

    String.prototype.truncate = function (count) {
        if (this.length < count) {
            return this.toString();
        } else if (this.length > count) {
            if (count < 4) {
                return '.'.repeat(count);
            }
            const lastIndex = this.toString()
                .substr(0, count - 2).lastIndexOf(' ');
            if (lastIndex !== -1) {
                return this.toString().substr(0, lastIndex) + '...';
            } else {
                return this.toString().substr(0, count - 3) + '...';
            }
        }
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            if (string.includes(i)) {
                string = string.replace(`{${i}}`, params[i]);
            }
        }

        return string;
    }
})()
