/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-02-21 13:59:36
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-03-18 23:07:46
 * @FilePath: \手写\手写\订阅器.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class EventEmitter {
  constructor() {
    this.map = new Map();
  }
  emit(name) {
    let set = this.map.get(name);
    if (!set) return;
    Array.from(set).forEach((fn) => fn());
  }
  on(name, fn) {
    let set = this.map.get(name);
    if (!set) {
      set = new Set([]);
      this.map.set(name, set);
    }
    set.add(fn);
  }
  off(name, fn) {
    let set = this.map.get(name);
    if (!set) return;
    set.delete(fn);
  }
  once(name, fn) {
    let that = this;
    function _fn() {
      fn();
      that.off(name, _fn);
    }
    let set = this.map.get(name);
    if (!set) {
      set = new Set([]);
      set.add(_fn);
    }
    this.map.set(name, set);
  }
}

const event = new EventEmitter();

function test() {
  console.log(123);
}
function test2() {
  console.log(555);
}
event.on("a", test);
event.emit("a");
event.emit("a");
event.off("a", test);
event.emit("a");
event.once("b", test2);
event.emit("b");
event.emit("b");
