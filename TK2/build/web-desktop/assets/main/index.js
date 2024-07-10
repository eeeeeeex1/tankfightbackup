System.register("chunks:///_virtual/AudioManeger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b3588j5+H5ANpq78qy7urKK", "AudioManeger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioManeger = exports('AudioManeger', (_dec = ccclass('AudioManeger'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManeger, _Component);
        function AudioManeger() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = AudioManeger.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return AudioManeger;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/background.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Graphics, Color, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b50dczuoj9L06/49nBn0Nab", "background", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var background = exports('background', (_dec = ccclass('background'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(background, _Component);
        function background() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = background.prototype;
        _proto.start = function start() {
          // 获取当前组件所在的节点上的 Graphics 组件
          var ctx = this.node.getComponent(Graphics);
          // 创建一个 cc.Color 对象，并设置为蓝色
          var blueColor = new Color().fromHEX('#F5ECEB');
          // 设置 Graphics 组件的填充颜色
          ctx.fillColor = blueColor;
          // 绘制一个矩形
          ctx.rect(-2560, -1440, 5120, 2880); // 从左下角 (-50, -50) 开始，绘制宽高为 100x100 的矩形
          ctx.fill(); // 填充矩形
        };

        _proto.update = function update(deltaTime) {
          // 这里可以添加每帧更新的逻辑
        };
        return background;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bullet0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Collider2D, Contact2DType, Component, PlayerController1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "82eb8uL1E5A6qEHok/xv6Ww", "bullet0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Bullet = exports('Bullet', (_dec = ccclass('Bullet0'), _dec2 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);
        function Bullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "explosionAudio", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Bullet.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this2 = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this2.node.destroy();

            // 检查音频源组件和音频剪辑是否已定义
            if (_this2.explosionAudio && _this2.explosionAudio.clip) {
              // 播放音效
              _this2.explosionAudio.playOneShot(_this2.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }
          }, 5);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          var _this3 = this;
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            //检查音频源组件和音频剪辑是否已定义
            if (_this3.explosionAudio && _this3.explosionAudio.clip) {
              // 播放音效
              _this3.explosionAudio.playOneShot(_this3.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }
            if (otherCollider && otherCollider.node.parent.name !== 'mapboundary' && otherCollider.node.name !== 'tank1') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(PlayerController1);
              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return Bullet;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bullet1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Collider2D, Contact2DType, Component, PlayerController0;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f16fbCbkbRMAqazbkYPerZc", "bullet1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Bullet = exports('Bullet', (_dec = ccclass('Bullet1'), _dec2 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);
        function Bullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "explosionAudio", _descriptor, _assertThisInitialized(_this));
          _this.life = 0;
          return _this;
        }
        var _proto = Bullet.prototype;
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this2 = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this2.node.destroy();
            // 检查音频源组件和音频剪辑是否已定义
            if (_this2.explosionAudio && _this2.explosionAudio.clip) {
              // 播放音效
              _this2.explosionAudio.playOneShot(_this2.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }
          }, 10);
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          var _this3 = this;
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            // 检查音频源组件和音频剪辑是否已定义
            if (_this3.explosionAudio && _this3.explosionAudio.clip) {
              // 播放音效
              _this3.explosionAudio.playOneShot(_this3.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }
            if (otherCollider && otherCollider.node.parent.name !== 'mapboundary' && otherCollider.node.name !== 'tank0') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank0') {
              var playerController0 = otherCollider.node.getComponent(PlayerController0);
              if (playerController0) {
                playerController0.tanklife = playerController0.tanklife - 1;
                console.log(playerController0.tanklife);
                if (playerController0.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
        };

        return Bullet;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cheat-test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, systemEvent, SystemEventType, macro, Component, PlayerController0;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      systemEvent = module.systemEvent;
      SystemEventType = module.SystemEventType;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e53736ZfF1Pro4MXnI//Ffo", "cheat-test", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TankCheatController = exports('TankCheatController', (_dec = ccclass('TankCheatController'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TankCheatController, _Component);
        function TankCheatController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 引用你的坦克节点或坦克组件，这里假设为 tankNode
          _initializerDefineProperty(_this, "tankNode", _descriptor, _assertThisInitialized(_this));
          // 秘籍输入
          _this.cheatCode = "";
          return _this;
        }
        var _proto = TankCheatController.prototype;
        _proto.onLoad = function onLoad() {
          // 监听键盘事件
          systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onDestroy = function onDestroy() {
          // 移除键盘事件监听
          systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onKeyDown = function onKeyDown(event) {
          // 获取按下的键名
          var key = event.keyCode;
          // 检查是否是字母键
          if (key >= macro.KEY.a && key <= macro.KEY.z || key >= macro.KEY.A && key <= macro.KEY.Z) {
            var keyName = String.fromCharCode(key);
            this.cheatCode += keyName.toLowerCase();
            // 检查是否匹配秘籍代码
            if (this.cheatCode === "zhaoyibo") {
              // 找到 PlayerController0 组件并进行操作
              var playercontroller0 = this.tankNode.getComponent(PlayerController0);
              if (playercontroller0) {
                playercontroller0.magnification = 20;
              }
              // 清空秘籍输入，以便下一次使用
              this.cheatCode = "";
            }
          } else {
            // 如果按下的不是字母键，则清空秘籍输入
            this.cheatCode = "";
          }
        };
        return TankCheatController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tankNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/double.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0370agxP55Po7eFMnKCxfno", "double", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var _double = exports('_double', (_dec = ccclass('double'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(_double, _Component);
        function _double() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = _double.prototype;
        _proto.start = function start() {
          this.node.on(Button.EventType.CLICK, this.loadDoublePlayerScene, this);
        };
        _proto.loadDoublePlayerScene = function loadDoublePlayerScene() {
          director.loadScene('alonemap2');
        };
        _proto.update = function update(deltaTime) {};
        return _double;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/endgame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8abaeaIEoJBA75RbJC4UUyB", "endgame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var endgame = exports('endgame', (_dec = ccclass('endgame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(endgame, _Component);
        function endgame() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = endgame.prototype;
        _proto.start = function start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.end, this);
        };
        _proto.end = function end() {
          game.end();
        };
        _proto.update = function update(deltaTime) {};
        return endgame;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enemybullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts', './tank0.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController1, PlayerController0;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "592eavcsiVCjrCqF8tlBd6C", "enemybullet", undefined);
      var ccclass = _decorator.ccclass;
      var enemybullet = exports('enemybullet', (_dec = ccclass('enemybullet'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(enemybullet, _Component);
        function enemybullet() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = enemybullet.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this.node.destroy();
          }, 5);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            console.log('发射击中');
            console.log('被击中的物体', otherCollider.node.name);
            if (otherCollider && otherCollider.node.parent.name !== 'mapboundary' && otherCollider.node.name !== 'tank1' && otherCollider.node.name !== 'tank0' && otherCollider.node.name !== 'enemytank') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(PlayerController1);
              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            } else if (otherCollider && otherCollider.node.name === 'tank0') {
              var playerController0 = otherCollider.node.getComponent(PlayerController0);
              if (playerController0) {
                playerController0.tanklife = playerController0.tanklife - 1;
                console.log(playerController0.tanklife);
                if (playerController0.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return enemybullet;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enemyfire.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './enemytank.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Vec2, instantiate, RigidBody2D, Component, enemytank;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      RigidBody2D = module.RigidBody2D;
      Component = module.Component;
    }, function (module) {
      enemytank = module.enemytank;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "33089amwGtMUok7r6rYQJKR", "enemyfire", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var enemyfire = exports('enemyfire', (_dec = ccclass('enemyfire'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(enemyfire, _Component);
        function enemyfire() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "shootPower", _descriptor, _assertThisInitialized(_this));
          //子弹的发射速度
          _initializerDefineProperty(_this, "bulletPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "landminePrefab", _descriptor3, _assertThisInitialized(_this));
          _this.lastFireTime = 0;
          // 上次发射时间
          _this.fireInterval = 1;
          // 发射间隔时间，单位秒
          _this.landminelastFireTime = 0;
          // 上次发射时间
          _this.landminefireInterval = 2;
          _this.speed = new Vec2(0, 0);
          _this.lastdirection = new Vec2(0, 0);
          return _this;
        }
        var _proto = enemyfire.prototype;
        _proto.update = function update(dt) {
          // 更新上次发射时间
          this.lastFireTime += dt;
          this.landminelastFireTime += dt;
          // 如果达到了发射间隔
          if (this.lastFireTime >= this.fireInterval) {
            // 调用发射子弹函数
            console.log('发射子弹');
            this.fireBullet();

            // 重置计时
            this.lastFireTime = 0;
          }
          if (this.landminelastFireTime >= this.landminefireInterval) {
            // 调用发射子弹函数
            console.log('放置地雷');
            this.putlandmine();

            // 重置计时
            this.landminelastFireTime = 0;
          }
        };
        _proto.fireBullet = function fireBullet() {
          var bullet = instantiate(this.bulletPrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //console.log(this.currentiondirection);
          //设置子弹实例的具体属性
          var tank = this.node.parent.getComponent(enemytank);
          var rgd = bullet.getComponent(RigidBody2D);
          this.speed = new Vec2(tank.currentspeed.x * 400, tank.currentspeed.y * 400);

          //console.log( 'this.speed ',this.speed );
          if (this.speed.x !== 0 || this.speed.y !== 0) {
            //console.log("修改",this.speed);
            this.lastdirection = this.speed;
            console.log(this.lastdirection);
          }
          if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
          }
          rgd.linearVelocity = this.speed;
        }

        //地雷放置模块
        ;

        _proto.onKeyDown0 = function onKeyDown0(event) {
          var now = Date.now();
          if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
            this.putlandmine();
            this.landminelastFireTime = now;
          }
        };
        _proto.putlandmine = function putlandmine() {
          console.log('放置地雷');
          var bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //设置子弹实例的具体属性
        };

        return enemyfire;
      }(Component), _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enemylandmine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController0, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d1cb8kbx01MgLnX8ZhbMQDu", "enemylandmine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var enemylandmine = exports('enemylandmine', (_dec = ccclass('enemylandmine'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(enemylandmine, _Component);
        function enemylandmine() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = enemylandmine.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this.node.destroy();
          }, 10);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            console.log('地雷触发');
            console.log('踩中地雷的物体', otherCollider.node.name);
            if (otherCollider && otherCollider.node.parent.name !== 'mapboundary' && otherCollider.node.name !== 'tank1' && otherCollider.node.name !== 'tank0' && otherCollider.node.name !== 'enemytank') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(PlayerController1);
              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            } else if (otherCollider && otherCollider.node.name === 'tank0') {
              var playerController0 = otherCollider.node.getComponent(PlayerController0);
              if (playerController0) {
                playerController0.tanklife = playerController0.tanklife - 1;
                console.log(playerController0.tanklife);
                if (playerController0.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return enemylandmine;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/enemytank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, RigidBody2D, SpriteFrame, Vec3, Collider2D, Contact2DType, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      RigidBody2D = module.RigidBody2D;
      SpriteFrame = module.SpriteFrame;
      Vec3 = module.Vec3;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "d96d3j60T9NoaaiJr33tzfj", "enemytank", undefined);
      //import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 定义方向向量
      var Direction = {
        LEFT: new Vec2(-1, 0),
        RIGHT: new Vec2(1, 0),
        UP: new Vec2(0, 1),
        DOWN: new Vec2(0, -1),
        UPLEFT: new Vec2(-1, 1),
        UPRIGHT: new Vec2(1, 1),
        DOWNLEFT: new Vec2(-1, -1),
        DOWNRIGHT: new Vec2(1, -1)
      };
      var Directions = [new Vec2(-1, 0),
      // LEFT
      new Vec2(1, 0),
      // RIGHT
      new Vec2(0, 1),
      // UP
      new Vec2(0, -1) // DOWN
      ];

      var enemytank = exports('enemytank', (_dec = ccclass('enemytank'), _dec2 = property(RigidBody2D), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(enemytank, _Component);
        function enemytank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //加速的倍率
          _initializerDefineProperty(_this, "magnification", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rigidBody", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftSpriteFrame", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightandupSpriteFrame", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightanddownSpriteFrame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftandupSpriteFrame", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftanddownSpriteFrame", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor11, _assertThisInitialized(_this));
          _this.direction = new Vec2(0, 0);
          //坦克生命值
          _this.tanklife = 5;
          _this.intervalInSeconds = 5;
          _this.currentspeed = new Vec2(0, 0);
          _this.lastChangeTime = void 0;
          // 上次位置改变的时间戳
          _this.timer = void 0;
          // 累计经过的时间
          _this.lastPosition = new Vec3();
          _this.EPSILON = 0.0001;
          _this.pressedKeys = void 0;
          _this.spreadspeed = new Vec2(0, 0);
          _this.aitankspeed = void 0;
          _this.deltx = 0;
          _this.delty = 0;
          return _this;
        }
        var _proto = enemytank.prototype;
        _proto.onLoad = function onLoad() {
          this.lastPosition = this.node.position; // 初始化上次记录的位置为当前位置
          this.lastChangeTime = Date.now(); // 初始化上次位置改变的时间戳为当前时间
          this.timer = 0; // 初始化计时器为0
        };

        _proto.start = function start() {
          //console.log('生成enemytank');
          this.aitankspeed = new Vec2(0, 0);
          this.changeDirection();
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.update = function update(dt) {
          // 检测位置是否改变

          var player = this.node.parent.getChildByName('tank0');
          if (Math.abs(this.node.position.x - player.position.x) < 100 || Math.abs(this.node.position.y - player.position.y) < 100) {
            this.aitankspeed.x = player.position.x - this.node.position.x;
            this.aitankspeed.y = player.position.y - this.node.position.y;
            this.aitankspeed.normalize();
            this.changeDirection(); // 调用函数
          } else {
            if (this.node.position.x - this.lastPosition.x > this.EPSILON || this.node.position.y - this.lastPosition.y > this.EPSILON) {
              // console.log('位置改变');
              this.lastPosition.set(this.node.position); // 更新记录的位置
              this.lastChangeTime = Date.now(); // 更新位置改变的时间戳
              this.timer = 0; // 重置计时器
            } else {
              this.timer += dt;
              // 检查是否超过2秒
              if (this.timer >= 3) {
                this.timer = 0; // 重置计时器
                this.changeDirection(); // 调用函数
              }
            }
          }
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          this.changeDirection(); // 自定义方法，用于改变坦克的移动方向
        };

        _proto.changeDirection = function changeDirection() {
          var newDirection = Math.floor(Math.random() * 4); // 假设有四个方向
          while (this.currentspeed === Directions[newDirection]) {
            newDirection = Math.floor(Math.random() * 4);
          }
          this.currentspeed = Directions[newDirection];
          this.updateSpriteFrame();
          if (this.aitankspeed.x !== 0 || this.aitankspeed.y !== 0) {
            var newVelocity = this.aitankspeed.clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = newVelocity;
            this.currentspeed = newVelocity;
          } else {
            var _newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = _newVelocity;
            this.currentspeed = _newVelocity;
          }
        };
        _proto.updateSpriteFrame = function updateSpriteFrame() {
          var spriteNode = this.node.getChildByName('RenderSprite0');
          var sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) : null;
          if (sprite) {
            switch (true) {
              case this.currentspeed.equals(Direction.UP):
                sprite.spriteFrame = this.upSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.DOWN):
                sprite.spriteFrame = this.downSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.LEFT):
                sprite.spriteFrame = this.leftSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.RIGHT):
                sprite.spriteFrame = this.rightSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.DOWNRIGHT):
                sprite.spriteFrame = this.rightanddownSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.UPRIGHT):
                sprite.spriteFrame = this.rightandupSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.DOWNLEFT):
                sprite.spriteFrame = this.leftanddownSpriteFrame;
                break;
              case this.currentspeed.equals(Direction.UPLEFT):
                sprite.spriteFrame = this.leftandupSpriteFrame;
                break;
            }
          }
        };
        return enemytank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "magnification", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leftSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rightSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rightandupSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightanddownSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftandupSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftanddownSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      /*
        当敌人与玩家的距离小于某个设定值的时候，敌人就能发现玩家，然后去攻击玩家。
      cc.Class({
          extends: cc.Component,
      =
          properties: {
              player:cc.Node,//不建议直接用挂载的方式，建议在onLoad里拿节点
          },
            // LIFE-CYCLE CALLBACKS:
            onLoad () {
              this.initTime = 0;
              //this.player = cc.Find("Canvas/Bg/tank");//建议使用这种方法拿到节点，
          },
            start () {
            },
            update (dt) {
              this.initTime++;
              //判断player和enemy节点距离，并且60帧才进行一次实时朝向的判断
              let playerPos = this.player.convertToWorldSpaceAR(cc.v2(0, 0));
              let thisPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
              if((Math.abs(playerPos.x - thisPos.x) < 300 && Math.abs(playerPos.y - thisPos.y) < 300)&&this.initTime>60){
                  let r = Math.atan2(playerPos.y - thisPos.y, playerPos.x - thisPos.x);
                  let degree = r * 180 / Math.PI;
                  degree = 360 - degree;
                  degree = degree - 90;
                  this.node.angle = -degree;
                  this.initTime = 0;
              }
          	
          },
      });
          */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/esc.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, systemEvent, SystemEvent, director, macro, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      director = module.director;
      macro = module.macro;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "37eb1oEYxdHv7tC6j1CFTmw", "esc", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var esc = exports('esc', (_dec = ccclass('esc'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(esc, _Component);
        function esc() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = esc.prototype;
        _proto.start = function start() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          director.preloadScene('return');
        };
        _proto.update = function update(deltaTime) {};
        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode == macro.KEY.escape) {
            console.log('esc');
            director.loadScene('return');
          }
        };
        return esc;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fireaffect0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './firedirection0.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, firedirection0;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      firedirection0 = module.firedirection0;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2ebc0qfWtBG4qSuLlvlFYnp", "fireaffect0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fireaffect0 = exports('fireaffect0', (_dec = ccclass('fireaffect0'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fireaffect0, _Component);
        function fireaffect0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playercontroller0 = null;
          _this.originalMagnification = 0;
          // ��ʼ�� fireInterval ֵ
          _this.changedMagnification = 0;
          // �仯��� fireInterval ֵ
          _this.isChanging = false;
          // �Ƿ����ڱ仯
          _this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          _this.changeTimer = 0;
          return _this;
        }
        var _proto = fireaffect0.prototype;
        // �仯��ʱ��
        _proto.start = function start() {
          var node0 = this.node.parent.getChildByName('firedirection');
          // ��ȡ PlayerController0 �� firedirection0 ��ʵ��

          this.playercontroller0 = node0.getComponent(firedirection0);

          // ��ʼ��¼��ǰ�� magnification ֵ
          if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.fireInterval;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        };

        _proto.update = function update(deltaTime) {
          if (this.playercontroller0) {
            var currentMagnification = this.playercontroller0.fireInterval;

            // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
              // magnification �����˱仯����ʼ��ʱ
              this.isChanging = true;
              this.changeTimer = 0;
              this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
              this.changeTimer += deltaTime;

              // �����ʱ�ﵽ�趨ʱ��
              if (this.changeTimer >= this.changeDuration) {
                // �� magnification �ظ���ԭʼֵ
                this.playercontroller0.fireInterval = this.originalMagnification;
                this.isChanging = false; // �仯����
              }
            }
          }
        };

        return fireaffect0;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fireaffect1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './firedirection1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, firedirection1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      firedirection1 = module.firedirection1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "00014pfEl1MZJcrTRFBLHjY", "fireaffect1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fireaffect1 = exports('fireaffect1', (_dec = ccclass('fireaffect1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fireaffect1, _Component);
        function fireaffect1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playercontroller0 = null;
          _this.originalMagnification = 0;
          // ��ʼ�� fireInterval ֵ
          _this.changedMagnification = 0;
          // �仯��� fireInterval ֵ
          _this.isChanging = false;
          // �Ƿ����ڱ仯
          _this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          _this.changeTimer = 0;
          return _this;
        }
        var _proto = fireaffect1.prototype;
        // �仯��ʱ��
        _proto.start = function start() {
          var node0 = this.node.parent.getChildByName('firedirection');
          // ��ȡ PlayerController0 �� firedirection0 ��ʵ��

          this.playercontroller0 = node0.getComponent(firedirection1);

          // ��ʼ��¼��ǰ�� magnification ֵ
          if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.fireInterval;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        };

        _proto.update = function update(deltaTime) {
          if (this.playercontroller0) {
            var currentMagnification = this.playercontroller0.fireInterval;

            // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
              // magnification �����˱仯����ʼ��ʱ
              this.isChanging = true;
              this.changeTimer = 0;
              this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
              this.changeTimer += deltaTime;

              // �����ʱ�ﵽ�趨ʱ��
              if (this.changeTimer >= this.changeDuration) {
                // �� magnification �ظ���ԭʼֵ
                this.playercontroller0.fireInterval = this.originalMagnification;
                this.isChanging = false; // �仯����
              }
            }
          }
        };

        return fireaffect1;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/firedirection0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Prefab, Vec2, input, Input, instantiate, RigidBody2D, Component, PlayerController0;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Prefab = module.Prefab;
      Vec2 = module.Vec2;
      input = module.input;
      Input = module.Input;
      instantiate = module.instantiate;
      RigidBody2D = module.RigidBody2D;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "03b5bcM+HRNr6OrX47NeHp/", "firedirection0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var firedirection0 = exports('firedirection0', (_dec = ccclass('firedirection0'), _dec2 = property(AudioSource), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(firedirection0, _Component);
        function firedirection0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "shootAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shootPower", _descriptor2, _assertThisInitialized(_this));
          //子弹的发射速度
          _initializerDefineProperty(_this, "bulletPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tankPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "landminePrefab", _descriptor5, _assertThisInitialized(_this));
          _this.direction = new Vec2(0, 0);
          _this.currentiondirection = new Vec2(0, 0);
          _this.lastdirection = new Vec2(0, -400);
          _this.speed = new Vec2(0, 0);
          _this.lastFireTime = 0;
          // 上次发射时间
          _this.fireInterval = 1;
          // 发射间隔时间，单位秒
          _this.landminelastFireTime = 0;
          // 上次发射时间
          _this.landminefireInterval = 2;
          _this.playercontroller0 = null;
          return _this;
        }
        var _proto = firedirection0.prototype;
        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        };
        _proto.update = function update() {
          var playercontroller0 = this.node.parent.getComponent(PlayerController0);
          if (playercontroller0.currentDirection.x !== 0 || playercontroller0.currentDirection.y !== 0) this.currentiondirection = playercontroller0.currentDirection;
          //this.lastdirection=playercontroller0.currentDirection;
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        }

        //检测是否设计j按下 触发fireBullet
        ;

        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode === 74) {
            //console.log("鼠标左键已经按下");
            var now = Date.now();
            if (now - this.lastFireTime > this.fireInterval * 1000) {
              this.fireBullet();
              this.lastFireTime = now;
            }
          }
        };
        _proto.fireBullet = function fireBullet() {
          //console.log("发射子弹");

          var bullet = instantiate(this.bulletPrefab);

          // 检查音频源组件和音频剪辑是否已定义
          if (this.shootAudio && this.shootAudio.clip) {
            // 播放音效
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
          } else {
            console.error('音频源组件或音频剪辑未定义');
          }
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //console.log(this.currentiondirection);
          //设置子弹实例的具体属性
          var rgd = bullet.getComponent(RigidBody2D);
          this.speed = new Vec2(this.currentiondirection.x * 400, this.currentiondirection.y * 400);

          //console.log( 'this.speed ',this.speed );
          if (this.speed.x !== 0 || this.speed.y !== 0) {
            //console.log("修改",this.speed);
            this.lastdirection = this.speed;
            console.log(this.lastdirection);
          }
          if (this.speed.x === 0 && this.speed.y === 0) {
            //console.log("为0");
            this.speed = this.lastdirection.clone();
          }
          rgd.linearVelocity = this.speed;
        }

        //检测k是否按下  发射地雷
        ;

        _proto.onKeyDown0 = function onKeyDown0(event) {
          if (event.keyCode === 75) {
            var now = Date.now();
            if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
              this.putlandmine();
              this.landminelastFireTime = now;
            }
          }
        };
        _proto.putlandmine = function putlandmine() {
          console.log('放置地雷');
          var bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //设置子弹实例的具体属性
        };

        return firedirection0;
      }(Component), _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tankPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/firedirection1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Prefab, Vec2, input, Input, instantiate, RigidBody2D, Component, PlayerController1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Prefab = module.Prefab;
      Vec2 = module.Vec2;
      input = module.input;
      Input = module.Input;
      instantiate = module.instantiate;
      RigidBody2D = module.RigidBody2D;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "acf90eXqSlNPYkgPRnPPj/i", "firedirection1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var firedirection1 = exports('firedirection1', (_dec = ccclass('firedirection1'), _dec2 = property(AudioSource), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(firedirection1, _Component);
        function firedirection1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "shootAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shootPower", _descriptor2, _assertThisInitialized(_this));
          //子弹的发射速度
          _initializerDefineProperty(_this, "bulletPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tankPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "landminePrefab", _descriptor5, _assertThisInitialized(_this));
          _this.direction = new Vec2(0, 0);
          _this.currentiondirection = new Vec2(0, 0);
          _this.lastdirection = new Vec2(0, -400);
          _this.speed = new Vec2(0, 0);
          _this.lastFireTime = 0;
          // 上次发射时间
          _this.fireInterval = 1;
          // 发射间隔时间，单位秒
          _this.landminelastFireTime = 0;
          // 上次发射时间
          _this.landminefireInterval = 2;
          _this.playercontroller1 = null;
          return _this;
        }
        var _proto = firedirection1.prototype;
        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        };
        _proto.update = function update() {
          var playercontroller0 = this.node.parent.getComponent(PlayerController1);
          if (playercontroller0.currentDirection.x !== 0 || playercontroller0.currentDirection.y !== 0) this.currentiondirection = playercontroller0.currentDirection;
          //this.lastdirection=playercontroller0.currentDirection;
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        }

        //检测是否设计j按下 触发fireBullet
        ;

        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode === 77) {
            //console.log("鼠标左键已经按下");
            var now = Date.now();
            if (now - this.lastFireTime > this.fireInterval * 1000) {
              this.fireBullet();
              this.lastFireTime = now;
            }
          }
        };
        _proto.fireBullet = function fireBullet() {
          //console.log("发射子弹");

          var bullet = instantiate(this.bulletPrefab);

          // 检查音频源组件和音频剪辑是否已定义
          if (this.shootAudio && this.shootAudio.clip) {
            // 播放音效
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
          } else {
            console.error('音频源组件或音频剪辑未定义');
          }
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //console.log(this.currentiondirection);
          var rgd = bullet.getComponent(RigidBody2D);
          this.speed = new Vec2(this.currentiondirection.x * 400, this.currentiondirection.y * 400);
          if (this.speed.x !== 0 || this.speed.y !== 0) {
            this.lastdirection = this.speed;
          }
          if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
          }
          rgd.linearVelocity = this.speed;
        }

        //检测k是否按下  发射地雷
        ;

        _proto.onKeyDown0 = function onKeyDown0(event) {
          if (event.keyCode === 78) {
            var now = Date.now();
            if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
              this.putlandmine();
              this.landminelastFireTime = now;
            }
          }
        };
        _proto.putlandmine = function putlandmine() {
          console.log('放置地雷');
          var bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);

          //设置子弹实例的具体属性
        };

        return firedirection1;
      }(Component), _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tankPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hp0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayerController0;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "149769Bi7JLlLfB/jgN9KNa", "hp0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var hp0 = exports('hp0', (_dec = ccclass('hp0'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(hp0, _Component);
        function hp0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.tank = void 0;
          return _this;
        }
        var _proto = hp0.prototype;
        _proto.start = function start() {
          this.tank = this.node.parent.getComponentInChildren(PlayerController0);
        };
        _proto.update = function update(deltaTime) {
          var hp = this.tank.tanklife;
          this.node.setScale(hp, 1);
        };
        return hp0;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hp1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "16f40Paa5xF74H2Eo1noFvw", "hp1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var hp1 = exports('hp1', (_dec = ccclass('hp1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(hp1, _Component);
        function hp1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.tank = void 0;
          return _this;
        }
        var _proto = hp1.prototype;
        _proto.start = function start() {
          this.tank = this.node.parent.getComponentInChildren(PlayerController1);
        };
        _proto.update = function update(deltaTime) {
          var hp = this.tank.tanklife;
          this.node.setScale(hp, 1);
        };
        return hp1;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/landmine0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "88fa81yu0NIJ6sEdkL6y4bu", "landmine0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var landmine0 = exports('landmine0', (_dec = ccclass('landmine0'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(landmine0, _Component);
        function landmine0() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = landmine0.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this.node.destroy();
          }, 10);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(PlayerController1);
              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return landmine0;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/landmine0%20copy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b1a54sS/HlN86Ty0gs+yA6o", "landmine0%20copy", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var landmine0 = exports('landmine0', (_dec = ccclass('landmine0'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(landmine0, _Component);
        function landmine0() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = landmine0.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this.node.destroy();
          }, 10);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(PlayerController1);
              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return landmine0;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/landmine1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController0;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a45aeLDPmdLxbUaQFne33wQ", "landmine1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var landmine1 = exports('landmine1', (_dec = ccclass('landmine1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(landmine1, _Component);
        function landmine1() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = landmine1.prototype;
        _proto.onLoad = function onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        };
        _proto.scheduleDestroy = function scheduleDestroy() {
          var _this = this;
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(function () {
            _this.node.destroy();
          }, 10);
        };
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            if (otherCollider && otherCollider.node.name === 'tank0') {
              var playerController0 = otherCollider.node.getComponent(PlayerController0);
              if (playerController0) {
                playerController0.tanklife = playerController0.tanklife - 1;
                console.log(playerController0.tanklife);
                if (playerController0.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return landmine1;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "45e19oOGc1Hp5H/76UhD0n3", "Loading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Loading = exports('Loading', (_dec = ccclass('Loading'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loading, _Component);
        function Loading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ProImage", _descriptor, _assertThisInitialized(_this));
          _this.time = void 0;
          //取进度条
          _this._name = void 0;
          return _this;
        }
        var _proto = Loading.prototype;
        _proto.start = function start() {
          this.ProImage.setScale(0, 1);
          this.time = 0;
          director.preloadScene('alonemap2');
        }

        //规定进度条百分比为0—1
        ;

        _proto.update = function update(deltaTime) {
          if (this.time >= 1) this.time = 1;else this.time += deltaTime / 4; //60帧4秒
          this.ProImage.setScale(this.time, 1);
          if (this.ProImage.scale.x == 1) director.loadScene('LoginScene'); //加载完毕时切入登录界面
        };

        return Loading;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ProImage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/log.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c0d87S4d4FDZKFYnivsEUVK", "log", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var user = function user() {
        this.Account = void 0;
        this.Password = void 0;
        this.save = void 0;
        this.difficulty = void 0;
        this.time = void 0;
      };
      var log = exports('log', (_dec = ccclass('log'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(log, _Component);
        function log() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "account", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "password", _descriptor2, _assertThisInitialized(_this));
          _this.presentAccout = void 0;
          return _this;
        }
        var _proto = log.prototype;
        _proto.start = function start() {
          this.node.on(Button.EventType.CLICK, this.checkAccount, this);
          director.addPersistRootNode(this.node);
        };
        _proto.update = function update(deltaTime) {};
        _proto.checkAccount = function checkAccount() {
          var _account = this.account.string;
          var _pwd = this.password.string; //获取输入的账户和密码
          if (_account.length == 0 || _pwd.length == 0) return;
          console.log(_account);
          var result = localStorage.getItem(_account); //检测是否存在账户

          if (result == null) {
            console.log("No Account!Create New Account");
            this.presentAccout = new user();
            this.presentAccout.Account = _account;
            this.presentAccout.Password = _pwd;
            this.presentAccout.save = 0;
            this.presentAccout.difficulty = 0;
            var json = JSON.stringify(this.presentAccout);
            localStorage.setItem(_account, json); //不存在则创建新账户
            director.loadScene('select');
          } else {
            console.log("found!");
            this.presentAccout = Object.assign(new user(), JSON.parse(result));
            if (this.presentAccout.Password != _pwd) console.log("Password Error!");else {
              console.log("Login Success!");
              director.loadScene('select');
            } //找到账户，检查密码
          }
        };

        return log;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "account", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "password", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Loading.ts', './double.ts', './endgame.ts', './esc.ts', './log.ts', './pause.ts', './returnlog.ts', './returnselect.ts', './select.ts', './welcome.ts', './AudioManeger.ts', './background.ts', './bullet0.ts', './bullet1.ts', './cheat-test.ts', './enemybullet.ts', './enemylandmine.ts', './enemyfire.ts', './enemytank.ts', './fireaffect0.ts', './fireaffect1.ts', './firedirection0.ts', './firedirection1.ts', './hp0.ts', './hp1.ts', './landmine0%20copy.ts', './landmine0.ts', './landmine1.ts', './normalwall.ts', './obj-firefast.ts', './obj-movefast.ts', './specialwall.ts', './speedaffect0.ts', './speedaffect1.ts', './tank0.ts', './tank1.ts', './tankdestroy.ts', './victory.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/normalwall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fbe25Cxh/pK4q2NAZRjzwvs", "normalwall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var wallbox = exports('wallbox', (_dec = ccclass('normalwall'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(wallbox, _Component);
        function wallbox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.key = 1;
          return _this;
        }
        var _proto = wallbox.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return wallbox;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/obj-firefast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './firedirection0.ts', './firedirection1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, firedirection0, firedirection1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      firedirection0 = module.firedirection0;
    }, function (module) {
      firedirection1 = module.firedirection1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "16e0dDTkZxOaIW6RW+clXFW", "obj-firefast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var objectfirefast = exports('objectfirefast', (_dec = ccclass('objectfirefast'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(objectfirefast, _Component);
        function objectfirefast() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = objectfirefast.prototype;
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node.name === "tank0" || otherCollider.node.name === "tank1") {
            var playercontroller0 = otherCollider.getComponentInChildren(firedirection0);
            var playercontroller1 = otherCollider.getComponentInChildren(firedirection1);
            if (playercontroller0) {
              playercontroller0.fireInterval = 0;
            } else {
              playercontroller1.fireInterval = 0;
            }
          }
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return objectfirefast;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/obj-movefast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component, PlayerController0, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d9747Wtz8FM1JYQrbWY8Q4k", "obj-movefast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var objectmovefast = exports('objectmovefast', (_dec = ccclass('objectmovefast'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(objectmovefast, _Component);
        function objectmovefast() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = objectmovefast.prototype;
        _proto.start = function start() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider) {
          console.log("bbbb");
          if (otherCollider.node.name === "tank0" || otherCollider.node.name === "tank1") {
            var playercontroller0 = otherCollider.getComponent(PlayerController0);
            var playercontroller1 = otherCollider.getComponent(PlayerController1);
            if (playercontroller0) {
              playercontroller0.magnification = 20;
            } else {
              playercontroller1.magnification = 20;
            }
          }
          // 确保只处理一次销毁操作
          this.scheduleOnce(function () {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
        };

        _proto.onDestroy = function onDestroy() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        return objectmovefast;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pause.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, input, Input, macro, instantiate, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      input = module.input;
      Input = module.Input;
      macro = module.macro;
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1be0eyzRhZBGY8Rli6HXSIg", "pause", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var pause = exports('pause', (_dec = ccclass('pause'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pause, _Component);
        function pause() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pausePrefab", _descriptor, _assertThisInitialized(_this));
          _this.status = 0;
          return _this;
        }
        var _proto = pause.prototype;
        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this._pause, this);
        };
        _proto._pause = function _pause(Event) {
          if (Event.keyCode == macro.KEY.space) {
            if (this.status == 0) {
              var stop = instantiate(this.pausePrefab);
              this.node.addChild(stop);
              this.status = 1;
              director.pause();
            } else {
              this.node.getChildByName('pause').destroy();
              this.status = 0;
              director.resume();
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        return pause;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pausePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/returnlog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a1894MKBihCZqyzCSgECpgT", "returnlog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var returnlog = exports('returnlog', (_dec = ccclass('returnlog'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(returnlog, _Component);
        function returnlog() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = returnlog.prototype;
        _proto.start = function start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.loadLogScene, this);
        };
        _proto.loadLogScene = function loadLogScene() {
          director.loadScene('LoginScene'); // 使用你的单人闯关场景名称
        };

        _proto.update = function update(deltaTime) {};
        return returnlog;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/returnselect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "31057Xb6zxNa55w052cL4PE", "returnselect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var returnselect = exports('returnselect', (_dec = ccclass('returnselect'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(returnselect, _Component);
        function returnselect() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = returnselect.prototype;
        _proto.start = function start() {
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto.loadSinglePlayerScene = function loadSinglePlayerScene() {
          director.loadScene('select');
        };
        return returnselect;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/select.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Button, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9acb6G0RhtAtb61aAt1B1dA", "select", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneSwitcher = exports('SceneSwitcher', (_dec = ccclass('SceneSwitcher'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneSwitcher, _Component);
        function SceneSwitcher() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SceneSwitcher.prototype;
        _proto.start = function start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        };
        _proto.loadSinglePlayerScene = function loadSinglePlayerScene() {
          director.loadScene('single'); // 使用你的单人闯关场景名称
        };

        return SceneSwitcher;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/specialwall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "acd0ehZL51I54bv8PNv/3a1", "specialwall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var background = exports('background', (_dec = ccclass('specialwall'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(background, _Component);
        function background() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.key = 0;
          return _this;
        }
        return background;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/speedaffect0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayerController0;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b4a99AMk+RN1Kp1f4UlhU0q", "speedaffect0", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var speedaffect0 = exports('speedaffect0', (_dec = ccclass('speedaffect0'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(speedaffect0, _Component);
        function speedaffect0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playercontroller0 = null;
          _this.originalMagnification = 0;
          // ��ʼ�� magnification ֵ
          _this.changedMagnification = 0;
          // �仯��� magnification ֵ
          _this.isChanging = false;
          // �Ƿ����ڱ仯
          _this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          _this.changeTimer = 0;
          return _this;
        }
        var _proto = speedaffect0.prototype;
        // �仯��ʱ��
        _proto.start = function start() {
          // ��ȡ PlayerController0 �� firedirection0 ��ʵ��
          this.playercontroller0 = this.node.parent.getComponent(PlayerController0);
          // ��ʼ��¼��ǰ�� magnification ֵ
          if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.magnification;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        };

        _proto.update = function update(deltaTime) {
          if (this.playercontroller0) {
            var currentMagnification = this.playercontroller0.magnification;

            // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
              // magnification �����˱仯����ʼ��ʱ
              this.isChanging = true;
              this.changeTimer = 0;
              this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
              this.changeTimer += deltaTime;

              // �����ʱ�ﵽ�趨ʱ��
              if (this.changeTimer >= this.changeDuration) {
                // �� magnification �ظ���ԭʼֵ
                this.playercontroller0.magnification = this.originalMagnification;
                this.isChanging = false; // �仯����
              }
            }
          }
        };

        return speedaffect0;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/speedaffect1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2ec4jJU+hDiKpgcdjl0OZ+", "speedaffect1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var speedaffect1 = exports('speedaffect1', (_dec = ccclass('speedaffect1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(speedaffect1, _Component);
        function speedaffect1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playercontroller1 = null;
          _this.originalMagnification = 0;
          // ��ʼ�� magnification ֵ
          _this.changedMagnification = 0;
          // �仯��� magnification ֵ
          _this.isChanging = false;
          // �Ƿ����ڱ仯
          _this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          _this.changeTimer = 0;
          return _this;
        }
        var _proto = speedaffect1.prototype;
        // �仯��ʱ��
        _proto.start = function start() {
          // ��ȡ PlayerController0 �� firedirection0 ��ʵ��
          this.playercontroller1 = this.node.parent.getComponent(PlayerController1);

          // ��ʼ��¼��ǰ�� magnification ֵ
          if (this.playercontroller1) {
            this.originalMagnification = this.playercontroller1.magnification;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        };

        _proto.update = function update(deltaTime) {
          if (this.playercontroller1) {
            var currentMagnification = this.playercontroller1.magnification;
            // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
              // magnification �����˱仯����ʼ��ʱ
              this.isChanging = true;
              this.changeTimer = 0;
              this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
              this.changeTimer += deltaTime;

              // �����ʱ�ﵽ�趨ʱ��
              if (this.changeTimer >= this.changeDuration) {
                // �� magnification �ظ���ԭʼֵ
                this.playercontroller1.magnification = this.originalMagnification;
                this.isChanging = false; // �仯����
              }
            }
          }
        };

        return speedaffect1;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tank0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './firedirection0.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, RigidBody2D, SpriteFrame, input, Input, macro, Component, firedirection0;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      RigidBody2D = module.RigidBody2D;
      SpriteFrame = module.SpriteFrame;
      input = module.input;
      Input = module.Input;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      firedirection0 = module.firedirection0;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "3f685ZuLc5Msp6m5mkxIn4D", "tank0", undefined);
      //import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 定义方向向量
      var Direction = {
        LEFT: new Vec2(-1, 0),
        RIGHT: new Vec2(1, 0),
        UP: new Vec2(0, 1),
        DOWN: new Vec2(0, -1),
        UPLEFT: new Vec2(-1, 1),
        UPRIGHT: new Vec2(1, 1),
        DOWNLEFT: new Vec2(-1, -1),
        DOWNRIGHT: new Vec2(1, -1)
      };
      var PlayerController0 = exports('PlayerController0', (_dec = ccclass('PlayerController0'), _dec2 = property(RigidBody2D), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerController0, _Component);
        function PlayerController0() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //加速的倍率
          _initializerDefineProperty(_this, "magnification", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rigidBody", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftSpriteFrame", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightandupSpriteFrame", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightanddownSpriteFrame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftandupSpriteFrame", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftanddownSpriteFrame", _descriptor10, _assertThisInitialized(_this));
          _this.moveSpeed = 1;
          // 调整移动速度
          _this.direction = new Vec2(0, 0);
          _this.pressedKeys = new Set();
          _this.currentDirection = Vec2.ZERO;
          //坦克生命值
          _this.tanklife = 5;
          return _this;
        }
        PlayerController0.currentDirection = function currentDirection(_currentDirection) {
          throw new Error('Method not implemented.');
        };
        var _proto = PlayerController0.prototype;
        //子弹发射的间隔
        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          if (this.upSpriteFrame && this.downSpriteFrame && this.leftSpriteFrame && this.rightSpriteFrame) {
            this.updateSpriteFrame();
          }
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        //运动实现模块
        ;

        _proto.onKeyDown = function onKeyDown(event) {
          if (!this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.add(event.keyCode);
            this.updateDirection();
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          if (this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys["delete"](event.keyCode);
            this.updateDirection();
          }
        };
        _proto.updateDirection = function updateDirection() {
          var newDirection = new Vec2(0, 0);
          if (this.pressedKeys.has(macro.KEY.w)) {
            newDirection.add(Direction.UP);
          }
          if (this.pressedKeys.has(macro.KEY.s)) {
            newDirection.add(Direction.DOWN);
          }
          if (this.pressedKeys.has(macro.KEY.a)) {
            newDirection.add(Direction.LEFT);
          }
          if (this.pressedKeys.has(macro.KEY.d)) {
            newDirection.add(Direction.RIGHT);
          }
          if (!newDirection.equals(this.currentDirection)) {
            this.currentDirection = newDirection;
            this.updateVelocity();
            this.updateSpriteFrame();
          } else if (newDirection.equals(new Vec2(0, 0))) {
            this.stopMove();
          }
        };
        _proto.updateVelocity = function updateVelocity() {
          //计算归一化的速度方向向量
          var velocity = this.currentDirection.clone().multiplyScalar(this.moveSpeed);
          velocity.multiplyScalar(this.magnification);
          if (this.rigidBody) {
            this.rigidBody.linearVelocity = velocity;
          }
        };
        _proto.stopMove = function stopMove() {
          if (!this.currentDirection.equals(Vec2.ZERO)) {
            this.currentDirection = Vec2.ZERO;
            this.rigidBody.linearVelocity = Vec2.ZERO;
          }
        };
        _proto.updateSpriteFrame = function updateSpriteFrame() {
          var firedirection = this.getComponentInChildren(firedirection0);
          var spriteNode = this.node.getChildByName('RenderSprite0');
          var sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) : null;
          if (sprite) {
            switch (true) {
              case this.currentDirection.equals(Direction.UP):
                sprite.spriteFrame = this.upSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWN):
                sprite.spriteFrame = this.downSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.LEFT):
                sprite.spriteFrame = this.leftSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.RIGHT):
                sprite.spriteFrame = this.rightSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWNRIGHT):
                sprite.spriteFrame = this.rightanddownSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.UPRIGHT):
                sprite.spriteFrame = this.rightandupSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWNLEFT):
                sprite.spriteFrame = this.leftanddownSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.UPLEFT):
                sprite.spriteFrame = this.leftandupSpriteFrame;
                break;
            }
          }
        };
        return PlayerController0;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "magnification", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leftSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rightSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rightandupSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightanddownSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftandupSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftanddownSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tank1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './firedirection1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, RigidBody2D, SpriteFrame, input, Input, macro, Component, firedirection1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      RigidBody2D = module.RigidBody2D;
      SpriteFrame = module.SpriteFrame;
      input = module.input;
      Input = module.Input;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      firedirection1 = module.firedirection1;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "20c59HvIUBIBr6op1Gc06+d", "tank1", undefined);
      //import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 定义方向向量
      var Direction = {
        LEFT: new Vec2(-1, 0),
        RIGHT: new Vec2(1, 0),
        UP: new Vec2(0, 1),
        DOWN: new Vec2(0, -1),
        UPLEFT: new Vec2(-1, 1),
        UPRIGHT: new Vec2(1, 1),
        DOWNLEFT: new Vec2(-1, -1),
        DOWNRIGHT: new Vec2(1, -1)
      };
      var PlayerController1 = exports('PlayerController1', (_dec = ccclass('PlayerController1'), _dec2 = property(RigidBody2D), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerController1, _Component);
        function PlayerController1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "magnification", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rigidBody", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "downSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftSpriteFrame", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightSpriteFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightandupSpriteFrame", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightanddownSpriteFrame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftandupSpriteFrame", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftanddownSpriteFrame", _descriptor10, _assertThisInitialized(_this));
          _this.moveSpeed = 1;
          // 调整移动速度
          _this.direction = new Vec2(0, 0);
          _this.currentDirection = Vec2.ZERO;
          _this.pressedKeys = new Set();
          _this.tanklife = 5;
          return _this;
        }
        var _proto = PlayerController1.prototype;
        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          if (this.upSpriteFrame && this.downSpriteFrame && this.leftSpriteFrame && this.rightSpriteFrame) {
            this.updateSpriteFrame();
          }
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        //运动实现模块
        ;

        _proto.onCollisionEnter = function onCollisionEnter(other, self) {
          //console.log('Collision occurred.');
          //console.log('Collision details:', other, self);

          // 假设与坦克发生了碰撞
          if (other.node.name === 'bullet') {
            this.node.destroy();
            other.node.destroy();
          }
        };
        _proto.onKeyDown = function onKeyDown(event) {
          if (!this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.add(event.keyCode);
            this.updateDirection();
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          if (this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys["delete"](event.keyCode);
            this.updateDirection();
          }
        };
        _proto.updateDirection = function updateDirection() {
          var newDirection = new Vec2(0, 0);
          if (this.pressedKeys.has(macro.KEY.up)) {
            newDirection.add(Direction.UP);
          }
          if (this.pressedKeys.has(macro.KEY.down)) {
            newDirection.add(Direction.DOWN);
          }
          if (this.pressedKeys.has(macro.KEY.left)) {
            newDirection.add(Direction.LEFT);
          }
          if (this.pressedKeys.has(macro.KEY.right)) {
            newDirection.add(Direction.RIGHT);
          }
          if (!newDirection.equals(this.currentDirection)) {
            this.currentDirection = newDirection;
            this.updateVelocity();
            this.updateSpriteFrame();
          } else if (newDirection.equals(new Vec2(0, 0))) {
            this.stopMove();
          }
        };
        _proto.updateVelocity = function updateVelocity() {
          // 计算归一化的速度方向向量
          var velocity = this.currentDirection.clone().multiplyScalar(this.moveSpeed);
          velocity.multiplyScalar(this.magnification);
          // 打印速度向量的值

          //console.log("当前方向： ", this.direction);
          if (this.rigidBody) {
            this.rigidBody.linearVelocity = velocity;
          }
        };
        _proto.stopMove = function stopMove() {
          if (!this.currentDirection.equals(Vec2.ZERO)) {
            this.currentDirection = Vec2.ZERO;
            this.rigidBody.linearVelocity = Vec2.ZERO;
          }
        };
        _proto.updateSpriteFrame = function updateSpriteFrame() {
          var firedirection = this.getComponentInChildren(firedirection1);
          var spriteNode = this.node.getChildByName('RenderSprite1');
          var sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) : null;
          if (sprite) {
            switch (true) {
              case this.currentDirection.equals(Direction.UP):
                sprite.spriteFrame = this.upSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWN):
                sprite.spriteFrame = this.downSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.LEFT):
                sprite.spriteFrame = this.leftSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.RIGHT):
                sprite.spriteFrame = this.rightSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWNRIGHT):
                sprite.spriteFrame = this.rightanddownSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.UPRIGHT):
                sprite.spriteFrame = this.rightandupSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.DOWNLEFT):
                sprite.spriteFrame = this.leftanddownSpriteFrame;
                break;
              case this.currentDirection.equals(Direction.UPLEFT):
                sprite.spriteFrame = this.leftandupSpriteFrame;
                break;
            }
          }
        };
        return PlayerController1;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "magnification", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leftSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rightSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rightandupSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightanddownSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftandupSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftanddownSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tankdestroy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayerController0, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "52691WYHxxPP58dB8/QkvIV", "tankdestroy", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tankdestroy = exports('tankdestroy', (_dec = ccclass('tankdestroy'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tankdestroy, _Component);
        function tankdestroy() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = tankdestroy.prototype;
        _proto.update = function update(deltaTime) {
          var playercontroller0 = this.node.parent.getComponent(PlayerController0);
          var playercontroller1 = this.node.parent.getComponent(PlayerController1);
          if (playercontroller0.tanklife === 0 || playercontroller1.tanklife === 0) {
            this.endsence();
          }
          playercontroller0.node.getPosition;
        };
        _proto.endsence = function endsence() {
          console.log('游戏结束');
        };
        return tankdestroy;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/victory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tank0.ts', './tank1.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component, PlayerController0, PlayerController1;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      PlayerController0 = module.PlayerController0;
    }, function (module) {
      PlayerController1 = module.PlayerController1;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "06ffdKUiFtKaLCWOjApBBHz", "victory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tankdestroy = exports('tankdestroy', (_dec = ccclass('monitor'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tankdestroy, _Component);
        function tankdestroy() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playercontroller0 = void 0;
          _this.playercontroller1 = void 0;
          return _this;
        }
        var _proto = tankdestroy.prototype;
        _proto.start = function start() {
          this.playercontroller0 = this.node.getComponentInChildren(PlayerController0);
          this.playercontroller1 = this.node.getComponentInChildren(PlayerController1);
          director.preloadScene('victory');
        };
        _proto.update = function update(deltaTime) {
          if (this.playercontroller0.tanklife == 0 || this.playercontroller1.tanklife == 0) {
            this.endsence();
          }
        };
        _proto.endsence = function endsence() {
          console.log('游戏结束');
          director.loadScene('victory');
        };
        return tankdestroy;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/welcome.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c44980TJVVGObtK8P6aFPtB", "welcome", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var welcome = exports('welcome', (_dec = ccclass('welcome'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(welcome, _Component);
        function welcome() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "LoadingPrefab", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = welcome.prototype;
        _proto.onLoad = function onLoad() {
          var Load = instantiate(this.LoadingPrefab); //动态挂载进度条
          this.node.addChild(Load);
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return welcome;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "LoadingPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});