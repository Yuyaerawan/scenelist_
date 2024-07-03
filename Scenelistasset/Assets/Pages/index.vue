<template>
  <div>
    <Menu />
    <div class="container">
      <h1>Movie List</h1>
      <input type="text" v-model="genreInput" placeholder="Search by genre" @input="filterMovies">
      <ul id="movieList">
        <li v-for="movie in filteredMovies" :key="movie.title" :data-genre="movie.genre">
          <strong>{{ movie.title }} - {{ movie.genre }}</strong>
          <p class="description">{{ movie.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu
  },
  data() {
    return {
      genreInput: '',
      movies: [
        { title: 'Inception', genre: 'Sci-Fi', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.' },
        { title: 'The Dark Knight', genre: 'Action', description: 'When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests.' },
        { title: 'Interstellar', genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
        { title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
        { title: 'The Godfather', genre: 'Crime', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
        { title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
        { title: 'Forrest Gump', genre: 'Drama', description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.' },
        { title: 'The Grand Budapest Hotel', genre: 'Comedy', description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.' },
        { title: 'Superbad', genre: 'Comedy', description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.' },
        { title: 'The Shining', genre: 'Horror', description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.' },
        { title: 'Get Out', genre: 'Horror', description: 'A young African-American man visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.' },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.' },
        { title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy', description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.' },
        { title: 'Toy Story', genre: 'Animation', description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.' },
        { title: 'Spirited Away', genre: 'Animation', description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.' },
        { title: 'The Notebook', genre: 'Romance', description: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.' },
        { title: 'Pride and Prejudice', genre: 'Romance', description: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?' },
        { title: 'Indiana Jones and the Raiders of the Lost Ark', genre: 'Adventure', description: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler\'s Nazis can obtain its awesome powers.' },
        { title: 'Jurassic Park', genre: 'Adventure', description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.' },
      ],
    }
  },
  computed: {
    filteredMovies() {
      const genreInput = this.genreInput.toLowerCase();
      return this.movies.filter(movie => movie.genre.toLowerCase().includes(genreInput));
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
h1 {
  text-align: center;
  color: #343a40;
  margin-bottom: 20px;
  font-size: 2em;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}
input {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s, transform 0.2s;
}
li:hover {
  background-color: #f1f1f1;
  transform: scale(1.01);
}
.description {
  color: #6c757d;
  font-size: 0.95em;
  margin-top: 5px;
}
strong {
  font-size: 1.1em;
}
</style>
