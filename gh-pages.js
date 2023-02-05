
import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/juniorjoe3/Svelte_Project.git', // Update to point to your repository
  user: {
   name: 'juniorjoe3', // update to use your name
   email: 'juniorjoe3@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);