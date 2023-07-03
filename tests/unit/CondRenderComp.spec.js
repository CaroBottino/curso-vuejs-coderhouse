import { mount } from '@vue/test-utils'
import CondRenderComp from '@/components/CondRenderComp.vue'

/*
There are three scenarios which we should verify are behaving correctly:
    1. The /profile link should be shown.
    2. When the user is an admin, the /admin link should be shown.
    3. When the user is not an admin, the /admin link should not be shown.
*/

test('renders a profile link', () => {
    const wrapper = mount(CondRenderComp)

    // Here we are implicitly asserting that the element id='profile' exists.
    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
});

test('does not render an admin link', () => {
    const wrapper = mount(CondRenderComp)

    // Using `wrapper.get` would throw and make the test fail.
    expect(wrapper.find('#admin').exists()).toBe(false)
})

test('renders an admin link', () => {
    // If you have other properties in data, don't worry - Vue Test Utils will merge the two together.
    const wrapper = mount(CondRenderComp, {
        data() {
            return {
                admin: true
            }
        }
    })

    // Again, by using `get()` we are implicitly asserting that the element exists.
    expect(wrapper.get('#admin').text()).toEqual('Admin')
})

/*
    In this scenario, the element is not visible but always rendered. 
    get() or find() will always return a Wrapper – find() with .exists() always return true – 
    because the element is still in the DOM.

    isVisible() gives the capacity to check for hidden elements. 
    
    In particular isVisible() will check if:
        - an element or its ancestors have display: none, visibility: hidden, opacity :0 style
        - an element or its ancestors are located inside collapsed <details> tag
        - an element or its ancestors have the hidden attribute
    
    For any of these cases, isVisible() returns false.
*/
test('does not show the user dropdown', () => {
    const wrapper = mount(CondRenderComp)

    expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
})