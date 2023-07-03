import { mount } from '@vue/test-utils'
import FullFormForTesting from '@/components/FullFormForTesting.vue'

test('submits a form', async () => {
    const wrapper = mount(FullFormForTesting)

    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
    await wrapper.find('select').setValue('moscow')
    await wrapper.find('input[type=checkbox]').setChecked()
    await wrapper.find('input[type=radio][value=monthly]').setChecked()
    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('submit')).toHaveLength(1)
    expect(wrapper.emitted('submit')[0]).toEqual([{
        city: "moscow",
        description: "Lorem ipsum dolor sit amet",
        email: "name@mail.com",
        interval: "monthly",
        subscribe: true,
    }])
});

test('submits the form 2', async () => {
    const wrapper = mount(FullFormForTesting)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setChecked()
    await wrapper.find('input[type=radio][value=monthly]').setChecked()

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
        email,
        description,
        city,
        subscribe: true,
        interval: 'monthly'
    })
});