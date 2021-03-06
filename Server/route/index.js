//邮箱发送方法
var emailserver = require('../dao/emailserver.js')
//注册页面服务
var signup = require('../server/signup')
//登录页面服务
var login = require('../server/login')
//搜索页面服务
var search = require('../server/search')
//用户详情页面服务
var userdetail = require('../server/userdetial')
//好友操作页面服务
var friend = require('../server/friend')
//主页操作页面服务
var index = require('../server/index')
//获取聊天信息
var chat = require('../server/chat')
//创建群页面服务
var group = require('../server/group')
//创建群首页服务
var groupHome = require('../server/groupHome')


module.exports = function (app) {
  //连接数据库测试
  app.post('/user', (req, res) => {
    res.send('aaa')
    // dbserver.findUser(res)
  })

  //邮箱测试
  app.post('/mail', (req, res) => {
    let mail = req.body.mail
    emailserver.emailSingUp(mail, res)
  })

  //注册页面
  //注册
  app.post('/signup/add', (req, res) => {
    signup.signUp(req, res)
  })

  //用户或邮箱是否占用判断
  app.post('/signup/judge', (req, res) => {
    signup.judge(req, res)
    console.log('---');
  })

  //登陆页面
  //登录
  app.post('/login/match', (req, res) => {
    login.login(req, res)
  })

  //token测试
  // app.post('/login/token', (req, res) => {
  //   search.searchUser(req,res)
  // })

  //搜索页面
  //搜索用户
  app.post('/search/user', (req, res) => {
    search.searchUser(req,res)
  })

  //判断好友
  app.post('/search/isfriend', (req, res) => {
    search.isFriend(req,res)
  })

  //搜索群
  app.post('/search/group', (req, res) => {
    search.searchGroup(req,res)
  })

  //判断是否在群内
  app.post('/search/isingroup', (req, res) => {
    search.isInGroup(req,res)
  })

  //用户详情
  //详情
  app.post('/user/detail', (req, res) => {
    userdetail.userDetial(req,res)
  })
  ////用户信息修改
  app.post('/user/update', (req, res) => {
    userdetail.userUpdata(req,res)
  })
  //好友备注获取
  app.post('/user/getalias', (req, res) => {
    userdetail.getFriendAlias(req,res)
  })
  //好友备注修改
  app.post('/user/alias', (req, res) => {
    userdetail.friendAliasUpdate(req,res)
  })

  //好友操作
  //好友申请
  app.post('/friend/apply', (req, res) => {
    friend.applyFriend(req,res)
  })

  //好友状态修改
  app.post('/friend/update', (req, res) => {
    friend.updateFriendState(req,res)
  })

  //拒绝好友或删除好友
  app.post('/friend/delete', (req, res) => {
    friend.deleteFriend(req,res)
  })

  //主页
  /** 以下为废弃部分 */
  //获取好友
  app.post('/index/getfriend', (req, res) => {
    index.getFriend(req,res)
  })

  //获取最后一条消息
  app.post('/index/getlastmsg', (req, res) => {
    index.getLastMsg(req,res)
  })

  //获取未读消息数
  app.post('/index/unreadmsg', (req, res) => {
    index.unreadMsg(req,res)
  })

  //获取群
  app.post('/index/getgroup', (req, res) => {
    index.getGroup(req,res)
  })

  //获取群最后一条消息
  app.post('/index/getlastgroupmsg', (req, res) => {
    index.getLastGroupMsg(req,res)
  })
  /** 以上为废弃部分 */

  // 获取好友信息和未读消息
  app.post('/index/getmsg', (req, res) => {
    index.indexGetMsg(req,res)
  })

  //清零好友未读消息数
  app.post('/index/updatemsg', (req, res) => {
    index.updateMsg(req,res)
  })

  // 获取群信息和未读消息
  app.post('/index/getgroupmsg', (req, res) => {
    group.getGroupMsg(req,res)
  })

  //清零群未读消息数
  app.post('/index/updategroupmsg', (req, res) => {
    index.updateGroupMsg(req,res)
  })

  //聊天页面
  app.post('/chat/msg', (req, res) => {
    chat.msg(req,res)
  })

  //群聊天页面
  app.post('/chat/groupMsg', (req, res) => {
    chat.groupMsg(req,res)
  })

  //建群页
  //建群
  app.post('/group/create', (req, res) => {
    group.createGroup(req,res)
  })

  // 群首页
  // 获取群信息
  app.post('/grouphome/msg', (req, res) => {
    groupHome.groupHome(req,res)
  })
  // 获取群成员
  app.post('/grouphome/member', (req, res) => {
    groupHome.groupMember(req,res)
  })
  // 添加群成员
  app.post('/grouphome/addmember', (req, res) => {
    groupHome.insertGroupUser(req,res)
  })

  // 退出群
  app.post('/grouphome/exit', (req, res) => {
    groupHome.exitGroup(req,res)
  })

  // 修改群名
  app.post('/grouphome/updata', (req, res) => {
    groupHome.update(req,res)
  })
  
  // 删除群成员
  app.post('/grouphome/delete', (req, res) => {
    groupHome.deleteGroupUser(req,res)
  })
}