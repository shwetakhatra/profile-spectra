describe('Import nuxt components', () =>{
    test('import as expected', async () =>{
        const component = await import('../components/ProfileCard.vue')
        expect(component).toBeDefined()
    })

    test('dynamic import as expected', async () =>{
        const name = 'ProfileCard'
        const component = await import(`../components/${name}.vue`)
        expect(component).toBeDefined()
    })
})