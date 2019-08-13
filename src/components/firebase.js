import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA7r75zEFxxVRi_kzrdawdqgYtsuGjjoGc',
	authDomain: 'react-hooks-firebase-b2570.firebaseapp.com',
	databaseURL: 'https://react-hooks-firebase-b2570.firebaseio.com',
	projectId: 'react-hooks-firebase-b2570',
	storageBucket: '',
	messagingSenderId: '1002998674378',
	appId: '1:1002998674378:web:e165749f1ec8db77'
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
		this.db = app.firestore();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password);
		return this.auth.currentUser.updateProfile({
			displayName: name
		});
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve);
		});
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName;
	}
}

export default new Firebase();
