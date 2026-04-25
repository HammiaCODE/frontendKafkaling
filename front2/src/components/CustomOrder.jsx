import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./CustomOrder.css";

export function CustomOrder() {
  const [state, handleSubmit] = useForm("FORM_ID");

  if (state.succeeded) {
    return <p>Order submitted</p>;
  }

  return (
    <form className="fs-form" onSubmit={handleSubmit}>
      <fieldset>
        <div className="fs-field">
          <label className="fs-label" htmlFor="customer-name">
            Customer Name
          </label>
          <input
            className="fs-input"
            id="customer-name"
            name="customer-name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="customer-email">
            Email Address
          </label>
          <input
            className="fs-input"
            id="customer-email"
            name="customer-email"
            type="email"
            required
          />
          <ValidationError prefix="Email" field="customer-email" errors={state.errors} />
        </div>
      </fieldset>

      <fieldset>
        <div className="fs-field">
          <label className="fs-label" htmlFor="dice-type">
            Dice Set Type
          </label>
          <select
            className="fs-select"
            id="dice-type"
            name="dice-type"
            required
          >
            <option value="standard">Standard Set (7 dice)</option>
            <option value="extended">Extended Set</option>
            <option value="single">Single Die</option>
          </select>
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="material">
            Material
          </label>
          <select
            className="fs-select"
            id="material"
            name="material"
            required
          >
            <option value="resin">Resin</option>
            <option value="acrylic">Acrylic</option>
            <option value="metal">Metal</option>
            <option value="wood">Wood</option>
          </select>
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="color-scheme">
            Color Scheme
          </label>
          <input
            className="fs-input"
            id="color-scheme"
            name="color-scheme"
            placeholder="e.g. black & gold, translucent blue"
            required
          />
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="finish">
            Finish
          </label>
          <select
            className="fs-select"
            id="finish"
            name="finish"
          >
            <option value="glossy">Glossy</option>
            <option value="matte">Matte</option>
            <option value="sharp-edge">Sharp Edge</option>
          </select>
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="inclusions">
            Inclusions (optional)
          </label>
          <input
            className="fs-input"
            id="inclusions"
            name="inclusions"
            placeholder="e.g. glitter, flowers, foil, tiny skulls"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="fs-field">
          <label className="fs-label" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="fs-input"
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            defaultValue="1"
            required
          />
        </div>

        <div className="fs-field">
          <label className="fs-label" htmlFor="deadline">
            Desired Delivery Date
          </label>
          <input
            className="fs-input"
            id="deadline"
            name="deadline"
            type="date"
          />
        </div>
      </fieldset>

      <div className="fs-field">
        <label className="fs-label" htmlFor="notes">
          Additional Notes
        </label>
        <textarea
          className="fs-textarea"
          id="notes"
          name="notes"
          placeholder="Any specific design ideas, character themes, or references"
        />
      </div>

      <div className="fs-button-group">
        <button className="fs-button" type="submit" disabled={state.submitting}>
          Submit Order
        </button>
      </div>
    </form>
  );
}

export default CustomOrder;