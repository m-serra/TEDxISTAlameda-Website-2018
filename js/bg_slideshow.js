var bg = document.getElementById("bg"); image = "";

var slideshow_pics = ["https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278263_656796467840718_2337298823345642103_o.jpg?oh=80bf60907a15c1f1c23fcf2354e62578&oe=5ABB96C8",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238783_656796484507383_8553989711615651939_o.jpg?oh=450080ee8a66bf8f49609022a55ae2ef&oe=5AFCCC7E",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359286_656797047840660_4176287751385468806_o.jpg?oh=1542dd2464e448b61bd9416db2a6b4a2&oe=5AC4E0D4",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278622_656796544507377_4345007737904570848_o.jpg?oh=e8aec1dfd5976f5257ecdf1f0dc2e938&oe=5AFD0BBE",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320674_656796694507362_3776247683413321490_o.jpg?oh=b7bb50b032c908bf687f81a975f6acb9&oe=5AC9BEA8",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278527_656796897840675_3729991618877967455_o.jpg?oh=2b9574ea9620a72e138d0245ca4deae9&oe=5ABE4BCD",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319150_656797147840650_2415578651118883702_o.jpg?oh=a1157f7a1925ed48f649f8dacfd63eb3&oe=5AF7CB34",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359010_656796777840687_8356012350490760992_o.jpg?oh=b9127213712fd57c55127ab83017c216&oe=5AB4B93F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278977_656796751174023_6031488475074036417_o.jpg?oh=acc0a13a2bcdb774076b061562a7341a&oe=5AB8AC6F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238586_656795481174150_6734661085472720274_o.jpg?oh=21b30773d0b6bbea229cc18c277d9482&oe=5AFA95A3",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238668_656795837840781_4792671965406444100_o.jpg?oh=c091b71d1054367e7f62a7f8b5d1f9bd&oe=5AF6B6C6",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278712_656795277840837_6666527526801430755_o.jpg?oh=2b6d3c9a0e1d6ac8988f49079a7f548e&oe=5ABFEEA1",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18318990_656795434507488_2232701498420165985_o.jpg?oh=3e0bafc6c469983398a511df7caa8699&oe=5AFBDF26",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278381_656796461174052_1570124178479807777_o.jpg?oh=2370b1cba7b98e2197b9b2db2be86cf6&oe=5AF883BB",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238192_656795274507504_22599534720234302_o.jpg?oh=b1b13c04623edc41f97ce1607bd9601b&oe=5AC8A254"
];


function slideshow() {
	setTimeout(function(){
		if($(window).width() <=480){
			image = 'url(' + slideshow_pics[Math.floor(Math.random() * slideshow_pics.length)] + ')'
		};
		bg.style.backgroundImage = image;
		slideshow();
	}, 5000);
};

slideshow();
