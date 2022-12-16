import { Content } from "./content"

describe("Notification content", () => {
    it('should be able to create notification content', () => {
        const content = new Content('Você recebeu uma notificação de amizade');
        expect(content).toBeTruthy();
    })

    it('should be not be able to create notification content with less than 5 characters', () => {
        expect(() => new Content('aaa')).toThrow()
    })

    it('should be not be able to create notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow()
    })
})
