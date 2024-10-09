// import Config from '../config';
// import VideoInfos from '../interfaces/VideoInfos';

class GamesService {
    private static API_URL = '/items/games';
  
    // Méthode pour récupérer les jeux
    static async fetchGames(): Promise<any[]> {
      try {
        const response = await fetch(GamesService.API_URL);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des jeux');
        }
        const data = await response.json();
        return data.data; // Retourne la partie 'data' qui contient les jeux
      } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
        throw error;
      }
    }

    

    // Get all videos list informations
    // static async getAllVideoInfos(): Promise<VideoInfos[]> {
    //     try {
    //         const response = await fetch(`${Config.BASE_URL_API}/files`, {
    //             method: 'GET'
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch all video infos');
    //         }
    //         const videoList = await response.json();
    //         console.log(videoList)
    //         return videoList;
    //     } catch (error) {
    //         console.error('Error fetching video list:', error);
    //         throw error;
    //     }
    // }

    // Get video informations by file name
    // static async getVideoInfosByFileName(videoInfos: VideoInfos): Promise<VideoInfos[]> {
    //     try {
    //         const params =  new URLSearchParams({ name: videoInfos.name });
    //         const response = await fetch(`${Config.BASE_URL_API}/files/${params}`, {
    //             method: 'GET'
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch video list');
    //         }
    //         const videoList = await response.json();
    //         console.log(videoList)
    //         return videoList;
    //     } catch (error) {
    //         console.error('Error fetching video list:', error);
    //         throw error;
    //     }
    // }

        // Delete video  by file name
        // static async deleteVideoByFileName(videoInfos: VideoInfos) {
        //     try {
        //       const response = await fetch(`${Config.BASE_URL_API}/delete`, {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ name: videoInfos.name }),
        //       });
        
        //       if (!response.ok) {
        //         throw new Error('Failed to delete video');
        //       }
        
        //       console.log('Video deleted successfully');
        //     } catch (error) {
        //       console.error('Error deleting video:', error);
        //       throw error;
        //     }
        //   }
}
  export default GamesService;
  