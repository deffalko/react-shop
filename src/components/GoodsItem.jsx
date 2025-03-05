function GoodsItem(props) {
  const { id, name, description, mainStats, images } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={images.background} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {mainStats.ClipSize}$
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
