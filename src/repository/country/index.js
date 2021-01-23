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

    manyByAlpha3Code(alpha3Codes, fields = null){
        return repository.get('/alpha', {
            params: {
                codes: alpha3Codes,
                fields
            }
        });
    },
}