require('react-native');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _index=require('./index');var _index2=_interopRequireDefault(_index);



var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='android';
return Platform;
});


it('renders regular button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_index2.default,null,'Test')).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.android.specc.js.map