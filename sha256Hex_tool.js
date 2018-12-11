/**
 * Created by Administrator on 2018/12/11.
 */
/**
 * Created by Administrator on 2018/12/11.
 */
/**sha256Hex加密**/
 var crypto = require('crypto');
 var key = "8f51002fef514bb8afd44270b84f1b19";
 //var str = "1000000408" +"1"+ "8f51002fef514bb8afd44270b84f1b19";
 var str = "1000000085"+"+86"+"18718560946"+"3" + key;
 console.log("str= "+str);
 hash = crypto.createHash('sha256').update(str).digest('hex');
 console.log(hash);
