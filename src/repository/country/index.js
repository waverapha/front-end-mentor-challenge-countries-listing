import repository from '../repository';

export default {
    all(fields = null){
        const repositoryPromise = repository.get('/all', {
            params: {
                fields
            }
        });

        return repositoryPromise;
    },

    byName(name, fields = null){
        return repository.get(`/name/${name}`, {
            params: {
                fullText: true,
                fields
            }
        });
    },
}