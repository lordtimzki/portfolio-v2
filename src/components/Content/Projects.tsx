const Projects = () => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex flex-nowrap space-x-6 w-max">
        <div className="card bg-base-300 shadow-xl overflow-hidden min-w-[320px] max-w-sm">
          <figure className="h-48 overflow-hidden">
            <img
              src="https://media.discordapp.net/attachments/627651183259156511/1356858004993216654/ShazAnime.png?ex=67ee17fd&is=67ecc67d&hm=3b6d4a37dbdbae16088e74325beeef7ef61724aa82433fc44da0002c31cd8b5b&=&format=webp&quality=lossless&width=1038&height=700"
              alt="ShazAnime screenshot"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">ShazAnime</h2>
            <p className="text-base-content/80">
              Anime Song Recognizer built with React.
            </p>
            <div className="card-actions justify-end mt-4">
              <a
                href="https://github.com/lordtimzki/ShazAnime"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl overflow-hidden min-w-[320px] max-w-sm">
          <figure className="h-48 overflow-hidden">
            <img
              src="https://media.discordapp.net/attachments/627651183259156511/1356861663961288734/image.png?ex=67ee1b65&is=67ecc9e5&hm=544488066365be9ed6c7094f432973c71f4d11b1895d978ceb69a56439a5e015&=&format=webp&quality=lossless&width=2928&height=1198"
              alt="Spotify Browser screenshot"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Spotify Browser</h2>
            <p className="text-base-content/80">
              Spotify Browser using Spotify's API, built with Angular and
              Express.
            </p>
            <div className="card-actions justify-end mt-4">
              <a
                href="https://github.com/uci-inf-133/a3-spotify-solo-tim/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl overflow-hidden min-w-[320px] max-w-sm">
          <figure className="h-48 overflow-hidden">
            <img
              src="https://media.discordapp.net/attachments/627651183259156511/1356863545802883072/image.png?ex=67ee1d26&is=67eccba6&hm=5bbf8e97373a8d51ca6f5574d62c08c7b9bb5895ac304022693eb913d5fd7e81&=&format=webp&quality=lossless&width=718&height=1554"
              alt="Spotify Browser screenshot"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              Mobile Sleep Tracker
            </h2>
            <p className="text-base-content/80">
              Mobile Sleep Tracker app built with Ionic/Angular.
            </p>
            <div className="card-actions justify-end mt-4">
              <a
                href="https://github.com/uci-inf-133/a4-sleeptracker-solo-tim-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
