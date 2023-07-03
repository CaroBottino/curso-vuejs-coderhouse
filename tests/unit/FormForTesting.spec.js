import { mount } from '@vue/test-utils'
import FormForTesting from '@/components/FormForTesting.vue'

test('test de caro', async () => {
    const wrapper = mount(FormForTesting);

    wrapper.find('button').trigger('click')
    await wrapper.get('[data-test="email"]').setValue('caro@mail.com')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('submit')).toHaveLength(2)
    expect(wrapper.emitted('submit')[0]).toEqual([""])
    expect(wrapper.emitted('submit')[1]).toEqual(["caro@mail.com"])
});

test('sets the value', async () => {
    const wrapper = mount(FormForTesting)
    const input = wrapper.find('input')

    await input.setValue('my@mail.com')

    expect(input.element.value).toBe('my@mail.com')
});

test('trigger', async () => {
    const wrapper = mount(FormForTesting)

    // trigger the element
    await wrapper.find('button').trigger('click')

    // assert some action has been performed, like an emitted event.
    expect(wrapper.emitted()).toHaveProperty('submit')
});

test('emits the input to its parent', async () => {
    const wrapper = mount(FormForTesting)

    // set the value
    await wrapper.find('input').setValue('my@mail.com')

    // trigger the element
    await wrapper.find('button').trigger('click')

    // assert the `submit` event is emitted,
    expect(wrapper.emitted('submit')[0][0]).toBe('my@mail.com')
});