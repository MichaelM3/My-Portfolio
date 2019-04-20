document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelector('.projects')

  projects.innerHTML = `
    <h2>What Do You Meme?</h2>
    <div class="project-info">
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/5ATneZTcZz0">
      </iframe>
      <div class="description">
        <p>
          A simplified way to create unique memes by using an image text overlay<br>
          + Built API using Ruby on Rails and the MVC pattern.<br>
          + Built front end using vanilla javascript<br>
          + Designed the database schema and configured ActiveRecord Associations<br>
          + Used Semantic and custom CSS to design front end
        </p>
      </div>
    </div>
  `

})
