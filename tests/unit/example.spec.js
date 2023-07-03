import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("is a Vue instance", () => {
    const msg = "my message";

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });

    //expect(wrapper.vm).toBeTruthy();
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  /*
  it('calls myFunction when btn is clecked', () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });

    // mock myFunction
    const myFunction = jest.fn();
    // const myFunction = jest.spyOn(wrapper.vm, 'myFunction'); // mismo resultado :)

    wrapper.setMethods({
      myFunction: myFunction
    });

    // trigger btn event...
    wrapper.find('#testing-btn').trigger('click');

    expect(myFunction).toHaveBeenCalled();
  });
  */
});
