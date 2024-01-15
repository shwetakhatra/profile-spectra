
import { expect, test } from 'vitest'

import { mount } from '@vue/test-utils';
import AddProfileButton from '../components/AddProfileButton.vue';

describe('AddProfileButton', () => {

  test('triggers onAddProfiles function when button is clicked', async () => {
    let count = 1;
    const wrapper = mount(AddProfileButton, {
      props: {
        onAddProfiles: (newCount: number) => {
            count = newCount;
        },
      },
    });
    await wrapper.find('button').trigger('click');
    expect(count).toBe(2);
    wrapper.unmount();
  });
});


