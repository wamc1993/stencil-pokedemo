import { FunctionalComponent, h } from '@stencil/core';

interface Properties {
  size: number;
  id: number;
  name: string;
  imageUrl: string;
  onClick: (name: string) => void;
}

export const PokeItem: FunctionalComponent<Properties> = ({ name, imageUrl, size, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div
      part="grid-item-container"
      onClick={handleClick}
      class={'poke-item__container'}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img part="grid-item-image" src={imageUrl} />
      <p part="grid-item-text">{name}</p>
    </div>
  );
};
