function Storage() {
    this.isJSON = function() {
        if (typeof str == 'string') {
            try {
                JSON.parse(str);
                return true;
            } catch (e) {
                return false;
            }
        }
    }

    this.getData = function() {
        // 根据提供的key获取结果
        var result = localStorage.getItem(key);

        if (result === null) {
            return [];
        } else {
            // 判断结果是否是JSON
            if (this.isJSON(result)) {
                return JSON.parse(result);
            } else {
                return result;
            }
        }
    }

    this.setData = function() {
        if (typeof key == 'string' && (typeof value == 'string') || typeof value == 'number' || typeof value == 'boolean') {
            localStorage.setItem(key, value);
        } else if (typeof key == 'object') {
            // 遍历对象
            for (var i in key) {
                localStorage.setItem(i, key[i]);
            }
        } else if (typeof key == 'string' && typeof value == 'object') {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            alert('非法数据');
        }
    }

    this.isExist = function() {
        var bool = false;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == res.id) {
                // 证明商品存在于购物车中
                bool = i;
                // 一旦商品存在于购物车数据中，则终止循环，得出结论：商品存在
                break;
            }
        }

        // 返回的布尔值：不存在false；存在返回对应的索引值
        return bool;
    }
}

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    }
}
// 获取数据
function getData(key) {
    // 根据提供的key获取结果
    var result = localStorage.getItem(key);

    if (result === null) {
        return [];
    } else {
        // 判断结果是否是JSON
        if (isJSON(result)) {
            return JSON.parse(result);
        } else {
            return result;
        }
    }
}

// 设置数据
function setData(key, value) {
    if (typeof key == 'string' && (typeof value == 'string') || typeof value == 'number' || typeof value == 'boolean') {
        localStorage.setItem(key, value);
    } else if (typeof key == 'object') {
        // 遍历对象
        for (var i in key) {
            localStorage.setItem(i, key[i]);
        }
    } else if (typeof key == 'string' && typeof value == 'object') {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        alert('非法数据');
    }
}

function isExist(res, arr) {
    var bool = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == res.id) {
            // 证明商品存在于购物车中
            bool = i;
            // 一旦商品存在于购物车数据中，则终止循环，得出结论：商品存在
            break;
        }
    }

    // 返回的布尔值：不存在false；存在返回对应的索引值
    return bool;
}
