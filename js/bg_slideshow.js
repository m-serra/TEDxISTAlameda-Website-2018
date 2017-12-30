var bg = document.getElementById("bg"); image = "";

var slideshow_pics = ["https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278263_656796467840718_2337298823345642103_o.jpg?oh=80bf60907a15c1f1c23fcf2354e62578&oe=5ABB96C8",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238783_656796484507383_8553989711615651939_o.jpg?oh=450080ee8a66bf8f49609022a55ae2ef&oe=5AFCCC7E",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18318987_656797071173991_3794048565826826526_o.jpg?oh=ed2445c0aee0b9e8d6ce28ad1166e6f6&oe=5AF24596",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359286_656797047840660_4176287751385468806_o.jpg?oh=1542dd2464e448b61bd9416db2a6b4a2&oe=5AC4E0D4",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278622_656796544507377_4345007737904570848_o.jpg?oh=e8aec1dfd5976f5257ecdf1f0dc2e938&oe=5AFD0BBE",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238599_656797127840652_1967794281930482534_o.jpg?oh=92da3962b95cf56bc529565aa10f7af6&oe=5ABE1838",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320868_656796627840702_2478385745774327966_o.jpg?oh=5cb7259eed30452630ae8904b29ed17f&oe=5AF8A21F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278885_656796667840698_6591770008365277331_o.jpg?oh=87d0e805c79340c8309fd9d251621d90&oe=5AC3D563",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320674_656796694507362_3776247683413321490_o.jpg?oh=b7bb50b032c908bf687f81a975f6acb9&oe=5AC9BEA8",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278527_656796897840675_3729991618877967455_o.jpg?oh=2b9574ea9620a72e138d0245ca4deae9&oe=5ABE4BCD",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319179_656796934507338_5503959711408635950_o.jpg?oh=91814f532aa498c1604c9acfee4d4d0a&oe=5AF6495D",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319150_656797147840650_2415578651118883702_o.jpg?oh=a1157f7a1925ed48f649f8dacfd63eb3&oe=5AF7CB34",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278457_656796764507355_7363929307621096281_o.jpg?oh=0e745373b0102e63e8f466b21c79f42a&oe=5AC24520",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359010_656796777840687_8356012350490760992_o.jpg?oh=b9127213712fd57c55127ab83017c216&oe=5AB4B93F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278455_656796997840665_3646836360555358497_o.jpg?oh=6d8d14ef7806ebdf21c70582ef206179&oe=5AB3B0F8",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320913_656796977840667_5039270329844023076_o.jpg?oh=49b67613f66233501afae209f2d996c4&oe=5ABC183B",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278977_656796751174023_6031488475074036417_o.jpg?oh=acc0a13a2bcdb774076b061562a7341a&oe=5AB8AC6F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278597_656797177840647_8225174916548801644_o.jpg?oh=68a27f8b20080695b54c67606842a7d3&oe=5AC2BF53",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18359081_656796854507346_4448347730646781984_o.jpg?oh=ede84acbacb356ca6185ed4503984e03&oe=5AFD1F1C",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238586_656795481174150_6734661085472720274_o.jpg?oh=21b30773d0b6bbea229cc18c277d9482&oe=5AFA95A3",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278815_656795281174170_4444852320705862663_o.jpg?oh=3ad74c2d0679f7d3ceba8a942d3c0684&oe=5AF25A0F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238668_656795837840781_4792671965406444100_o.jpg?oh=c091b71d1054367e7f62a7f8b5d1f9bd&oe=5AF6B6C6",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278712_656795277840837_6666527526801430755_o.jpg?oh=2b6d3c9a0e1d6ac8988f49079a7f548e&oe=5ABFEEA1",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18402089_656796404507391_170703357060977648_o.jpg?oh=2e4691a129210827a4833f9be89cbda6&oe=5ACA6B5F",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319227_656795801174118_4458158389938550948_o.jpg?oh=d28be65c2f1453724b4aa8e62f9510bf&oe=5AF42C0B",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18320777_656795421174156_6125734395661624729_o.jpg?oh=79c5c0ca00a78640fd7de14efac30d1d&oe=5AB6DF8E",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18318990_656795434507488_2232701498420165985_o.jpg?oh=3e0bafc6c469983398a511df7caa8699&oe=5AFBDF26",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18238000_656796374507394_4219996919477073335_o.jpg?oh=cdbc67d4b2b5498ab9cd151dfbd183c0&oe=5AB830EB",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18278131_656795971174101_7662134281341851218_o.jpg?oh=2c8167367862c1b09850f129365f018f&oe=5AFAD6C1",
"https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/18319297_656796221174076_120737701942993943_o.jpg?oh=03757172023d238b40294c4cd3513345&oe=5AF720BB",
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
