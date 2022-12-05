import { connect } from "react-redux";
import { PrivacyStyle } from "./Privacy.style";

function Privacy({ ...props }) {
  return (
    <PrivacyStyle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
        elementum tellus. Mauris tincidunt purus id libero varius, id
        pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit
        amet finibus neque commodo.
      </p>

      <p>
        Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi.
        Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget
        enim tristique, id sagittis neque commodo. Phasellus in elit velit.
        Etiam sodales dictum luctus.
      </p>

      <p>
        Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum,
        nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio
        enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non
        sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum
        tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc.
        Duis rutrum lorem eget dapibus vulputate.
      </p>

      <p>
        Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi.
        Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi.
        Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus,
        posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
      </p>

      <p>
        Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi.
        Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi.
        Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus,
        posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
      </p>
    </PrivacyStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
