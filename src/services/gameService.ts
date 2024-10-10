import { Game } from '../types/game';

class GamesService {

    private static API_URL = 'http://ec2-13-50-5-24.eu-north-1.compute.amazonaws.com:8055/items/games';

    // Méthode pour récupérer les jeux
    static async fetchGames(): Promise<Game[]> {
        try {
            const response = await fetch(GamesService.API_URL);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des jeux');
            }
            const data = await response.json();

            // Assurez-vous que chaque jeu a un statut
            const gamesWithStatus: Game[] = data.data.map((game: Partial<Game>) => ({
                ...game,
                status: game.status || this.getRandomStatus(),
            } as Game));

            return gamesWithStatus;
        } catch (error) {
            console.error('Erreur lors de la récupération des jeux:', error);
            throw error;
        }
    }

    private static getRandomStatus(): 'completed' | 'failed' | 'pending' | 'none' {
        const statuses: ('completed' | 'failed' | 'pending' | 'none')[] = ['completed', 'failed', 'pending', 'none'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }
}

export default GamesService;
