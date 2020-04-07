const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique', () => {
    it('should generate an unique id ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         