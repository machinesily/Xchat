export default {
	//首页时间转化 (oldData为对方发送消息的时间，nowDate为当前系统时间)
	changeDate(oleDate) {
		let old = new Date(oleDate);
		let now = new Date()
		
		//获取oldDate的具体时间
		let hour = old.getHours()
		let minute = old.getMinutes()
		let year = old.getFullYear()
		let month = old.getMonth() + 1 //获取的比实际要小，所以要加一
		let day = old.getDate()
		
		//获取nowDate的具体时间
		let nowhour = now.getHours()
		let nowminute = now.getMinutes()
		let nowyear = now.getFullYear()
		let nowmonth = now.getMonth() + 1
		let nowday = now.getDate()

		//当天的消息
		if (day === nowday && month === nowmonth && year === nowyear) {
			if (hour < 10) {
				hour = '0' + hour
			}
			if (minute < 10) {
				minute = '0' + minute
			}
			return hour + ':' + minute
		}

		//昨天的消息
		if (day + 1 === nowday && month === nowmonth && year === nowyear) {
			if (hour < 10) {
				hour = '0' + hour
			}
			if (minute < 10) {
				minute = '0' + minute
			}
			return '昨天' + hour + ':' + minute
		} else {
			if (hour < 10) {
				hour = '0' + hour
			}
			if (minute < 10) {
				minute = '0' + minute
			}
			return year + '/' + month + '/' + day
		}



	}
}
