import { mount } from '@vue/test-utils'
import TodoForTesting from '@/components/TodoForTesting.vue'

test('renders a todo', () => {
    const wrapper = mount(TodoForTesting)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js testing')
});

/*
    Jest executes tests in a SYNChronous manner, ending the test as soon as the final function is called. 
    Vue, however, updates the DOM ASYNChronously. 
    
    We need to mark the test async, and call await on any methods that might cause the DOM to change. 
    trigger is one such methods, and so is setValue.
*/
test('creates a todo', async () => {
    const wrapper = mount(TodoForTesting)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
});

test('completes a todo', async () => {
    const wrapper = mount(TodoForTesting)

    await wrapper.get('[data-test="todo-checkbox"]').setChecked()

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
});
