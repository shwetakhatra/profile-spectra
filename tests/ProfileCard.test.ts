import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProfileCard from '../components/ProfileCard.vue';

describe('ProfileCard', () => {
  test('receives correct data in props', async () => {
    const mockProfile = {
        "gender": "female", "name": { "title": "Mrs", "first": "Pavla", "last": "Solovey" }, "location": { "street": { "number": 8025, "name": "Illi Erenburga" }, "city": "Bolgrad", "state": "Volinska", "country": "Ukraine", "postcode": 83364, "coordinates": { "latitude": "49.4938", "longitude": "-50.3219" }, "timezone": { "offset": "-9:00", "description": "Alaska" } }, "email": "pavla.solovey@example.com", "login": { "uuid": "78880b10-ee21-418a-86b4-65667473e505", "username": "orangemeercat922", "password": "alabama", "salt": "FHlQ0bJh", "md5": "bd1fb0dfcfe954241f2b7b403260888f", "sha1": "9714a45bba79de4d32138d1c9bb19352890cfe24", "sha256": "5b273bc4b3ef1f6d2a1711752aa398c9c137bd911e627a0c40beabf35257a430" }, "dob": { "date": "1974-07-12T14:27:41.747Z", "age": 49 }, "registered": { "date": "2021-11-27T07:52:39.600Z", "age": 2 }, "phone": "(098) C12-6626", "cell": "(098) A37-2799", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/38.jpg", "medium": "https://randomuser.me/api/portraits/med/women/38.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg" }, "nat": "UA" 
    };

    const wrapper = mount(ProfileCard, {
      props: {
        profile: mockProfile,
      },
    }) as any;

    expect(wrapper.props().profile).toEqual(mockProfile);
    expect(wrapper.find('.card-title').text()).toBe(`Mrs. Pavla Solovey`);
    wrapper.unmount();
  });
});
