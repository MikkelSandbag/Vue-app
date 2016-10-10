// For future implentation of getting github users' info
/* var getData = function() {
	var apiURL = 'https://api.github.com/users';

	fetch(apiURL).then(function(responseOne){
		return responseOne.json();
	}).then(function(responseTwo) {
		for (var i = 0; i < responseTwo.length; i++) {
			fetch(apiURL + '/' + responseTwo[i].login).then(function(responseThree) {
				return responseThree.json();
			}).then(function(responseFour) {
				console.log(responseFour.location);
			});
		}
	});
}; */

//getData();

var initNewUser = {
	id: '',
	avatar: '',
	firstName: '',
	lastName: '',
	city: '',
	state: '',
	url: '',
	description: ''
}

var randomUserData = {
	id: '',
	avatar: ['/img/default-profile-1.png', '/img/default-profile-2.png', '/img/default-profile-3.png', '/img/default-profile-4.png', '/img/default-profile-5.png', '/img/default-profile-6.png', '/img/default-profile-7.png', '/img/default-profile-8.png', '/img/default-profile-9.png', '/img/default-profile-10.png'],
	firstName: ['Fredrick', 'Kristine', 'Jeffery', 'Bryan', 'Iris', 'Milton', 'Cristina', 'Sonia', 'Roxanne', 'Preston'],
	lastName: ['Baldwin', 'Morrison', 'Rodriquez', 'Boone', 'Stevens', 'Marsh', 'Hodges', 'Hampton', 'Vasquez', 'Perkins'],
	city: ['Blucksberg Mountain', 'Pine Forest', 'Hamler', 'La Selva Beach', 'North Adams', 'East Enterprise', 'Rosemead', 'Beaver City', 'Dotsero', 'Keo'],
	state: ['CA', 'SD', 'NC', 'OR', 'AR', 'CO', 'AZ', 'IA', 'NM', 'IN'],
	url: ['http://leastovertension.com', 'http://bittenveronal.com', 'http://nastysupershipment.com', 'http://goodunderlaundress.com', 'http://inventedambystomatidae.com', 'http://plainbiegnet.com', 'http://obviouspreactivity.com', 'http://sentaugusta.com', 'http://extranonalliterativeness.com', 'http://friendlyresensitization.com'],
	description: ['The mixture trains the pleasure throughout the formed peripheral. The bulletin scans the unknown. How can the upstairs burn without a spiritual crop? ', 'The terrible pedestrian advances the academic jerk. An overall helmet retracts a likelihood. A burden leaps the common manager without the noble.', 'A pump lies? A searching acquaintance leaps under the advice. The custom mystery exits in the hypothetical spy.', 'Does an anger subsidize the hello? An identical genre bows next to my licensed system.', 'The evidence consults the dried numeral beneath the audience. The notable song roots for the inter shutdown.', 'The nuisance strokes a condensed degenerate. The vicar dedicates the handful. A landlord duffs the organized shell.', 'His coin burns a change. The resolved violence pulses over the tale. The assigned detail invests a pet behind the embarrassed lark.', 'Does the improving indicator speak with the winter? The passing luck tempts the latest contour. The enjoyable genius tubes the enlightened employee.', 'Outside a tail toes the line a useful headline. A stumbling winner appends the practical word. The partner whistles outside the arc.', 'A prerequisite cheer hums behind the interrupted addict. The festival guides the cheat opposite the crying chapter. Any delight reacts below the resident!']
}

var randomizeData = function(max) {
	return Math.floor(Math.random() * max);
}

var app = new Vue({
    el: '#app',
    data: {
		users: [],
		newUser: { initNewUser }
    },
	methods: {
		isEmpty: function(index, prop) {
			if (index == undefined) {
				return true;
			} else {
				return false;
			}
		},
		addMember: function() {
			this.newUser.id = this.users.length + 1;
			this.users.push(this.newUser);
			this.newUser = { initNewUser };
		},
		addRandomMember: function() {
			this.newUser.id = this.users.length + 1;
			this.newUser.avatar = randomUserData.avatar[randomizeData(randomUserData.avatar.length)];
			this.newUser.firstName = randomUserData.firstName[randomizeData(randomUserData.firstName.length)];
			this.newUser.lastName = randomUserData.lastName[randomizeData(randomUserData.lastName.length)];
			this.newUser.city = randomUserData.city[randomizeData(randomUserData.city.length)];
			this.newUser.state = randomUserData.state[randomizeData(randomUserData.state.length)];
			this.newUser.url = randomUserData.url[randomizeData(randomUserData.url.length)];
			this.newUser.description = randomUserData.description[randomizeData(randomUserData.description.length)];
			this.users.push(this.newUser);
			this.newUser = { initNewUser };
		},
		setProperty: function(propName) {
			this.newUser.propName = propName.value;
		},
		removeMember: function(index) {
			this.users.splice((index), 1);
		}
	}
});