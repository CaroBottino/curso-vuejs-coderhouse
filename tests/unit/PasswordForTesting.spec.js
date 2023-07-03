import { mount } from '@vue/test-utils'
import PasswordForTesting from '@/components/PasswordForTesting.vue'

/*
test('renders an error if length is too short', () => {
    const wrapper = mount(PasswordForTesting, {
        props: {
            minLength: 10
        },
        data() {
            return {
                password: 'short'
            }
        }
    })

    expect(wrapper.html()).toContain('Password must be at least 10 characters')
});

test('renders an error if length is too short', async () => {
    const wrapper = mount(PasswordForTesting)
    await wrapper.get('[data-test="password"]').setValue('passForTest')
    console.log(wrapper.html())
    expect(wrapper.html()).not.toContain('Password must be shorter than 4 characters.')

    await wrapper.setProps({ minLength: 4 })

    console.log(wrapper.html())

    expect(wrapper.html()).toContain('Password must be shorter than 4 characters.')
});
*/

test('renders a greeting when show is true', async () => {
    const wrapper = mount(PasswordForTesting)
    expect(wrapper.html()).toContain('Hello')

    await wrapper.setProps({ show: false })

    expect(wrapper.html()).not.toContain('Hello')
});

test('renders a greeting when show is true again', async () => {
    const wrapper = mount(PasswordForTesting, {
        props: {
            show: false
        }
    })

    await wrapper.setProps({ show: true })

    expect(wrapper.html()).toContain('Hello')
});