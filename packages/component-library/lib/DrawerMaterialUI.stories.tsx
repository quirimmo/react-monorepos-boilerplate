import React, { useState } from 'react';
import { Drawer, Button } from '@material-ui/core';

export default { title: 'Drawer Material UI' };

export const sample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = (isOpen: boolean) => () => setIsOpen(isOpen);

  return (
    <>
      <Button onClick={handleDrawer(true)}>Open Left</Button>
      <Drawer anchor="right" open={isOpen} onClose={handleDrawer(false)}>
        Cargil Rocks!
      </Drawer>
    </>
  );
};
