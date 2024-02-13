/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

/* const dog = {
  name: 'Lord',
  height: 80,
  weight: 50,
  paws: 4,

  bark() {
    console.log('DOG: Woof Woof');
  },
  sleep() {
    console.log('DOG: Zzzzzz');
  },
};

const cat = {
  name: 'Lord',
  height: 80,
  weight: 50,
  paws: 4,

  sayName() {},
  eat() {
    console.log('CAT: Nyama nyama');
  },
  scratch() {
    console.log('CAT: ||| |||');
  },
  sleep() {
    console.log('CAT: Zzzz');
  },
}; */

// ==============================
/* const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },
  removeTrack(trackName) {
    for (let i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i] === trackName) {
        this.tracks.splice(i, 1);
        break;
      }
    }
  },
}; */

// console.log(playlist.getTrackCount());
// playlist.changeName('New playlist name');

/* playlist.addTrack('new track 1');
playlist.addTrack('Pump It');

console.log(playlist.getTrackCount());

playlist.addTrack('new track 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);
 */

// =============================

const arr = [1, 3, 5, 7, 78, 3, 1, 2, 34, 5];

arr.splice(4, 1, 'HELLO');

console.log(arr);
