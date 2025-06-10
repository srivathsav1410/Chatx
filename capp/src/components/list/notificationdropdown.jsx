import React, { useState, useRef, useEffect } from 'react';
import { Icon, initializeIcons } from '@fluentui/react';
import { useSelector } from 'react-redux';
initializeIcons(); // Ensures Fluent UI icons work

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
      const { Friends } = useSelector((state) => state.chat);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Icon
        iconName="Ringer"
        onClick={toggleDropdown}
        styles={{ root: { fontSize: 24, cursor: 'pointer' } }}
      />

  
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            position:'absolute',
            top:'30px',
            right:0,
            width:'300px',
            backgroundColor:'#fff',
            border: '1px solid #ddd',
             borderRadius: '8px',
             boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
             padding: '12px',
              zIndex: 999,
          
          }}
        >
          <h4 style={{ marginBottom: '10px' }}>Notifications</h4>
        {

        }
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
