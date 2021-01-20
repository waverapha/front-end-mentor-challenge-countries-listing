import repository from '../repository';

export default {
    all(fields = null){
        return repository.get('/all', {
            params: {
                fields
            }
        });
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