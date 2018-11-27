import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({adapter: new Adapter()});

describe('<Button />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow( <Button /> );
    });

    it('should find button', () => {
        expect(wrapper.find('button')).toHaveLength(1);

    });

    it('should have classname buttonPrimnary if secondary prop does not exist', () => {
    	// wrapper.setProps({ secondary: false });
        expect(wrapper.find('button').hasClass('buttonPrimary')).toEqual(true);
    });

    it('should have classname buttonSecondary if secondary prop exists', () => {
    	wrapper.setProps({ secondary: true });
        expect(wrapper.find('button').hasClass('buttonSecondary')).toEqual(true);
    });

    it('should call correct function once on click', () => {
        const clickHandler = jest.fn();
        wrapper.setProps({ onClick: clickHandler });
        wrapper.find('button').simulate('click');
        expect(clickHandler).toHaveBeenCalledTimes(1)
    });
});
