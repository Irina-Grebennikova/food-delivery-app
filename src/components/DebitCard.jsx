function DebitCard() {
  return (
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/visa-logo.png?alt=media&token=2d196d70-81b0-45cc-ac0b-73257b0d749f"
        alt=""
        className="card_logo"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-abca3.appspot.com/o/chip.png?alt=media&token=24265dc4-66a0-4ade-860c-25f985098cd5"
        alt=""
        className="card_chip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">John Doe</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;
