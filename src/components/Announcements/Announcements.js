import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnnouncementsThunk } from "../../state/thunks/announcements.thunk";
import { AnnouncementsStyle } from "./Announcements.style";

const MOCK_DATA = [
  {
    id: 1,
    title: "1 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 2,
    title: "2 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 3,
    title: "3 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 4,
    title: "4 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 5,
    title: "5 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 6,
    title: "6 Lorem ipsum dolor sit amet, consectetur adipiscing",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 7,
    title: "7 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 8,
    title: "8 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 9,
    title: "9 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 10,
    title: "10 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 11,
    title: "11 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 12,
    title: "12 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 13,
    title: "13 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 14,
    title: "14 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 15,
    title: "15 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 16,
    title: "16 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
  {
    id: 17,
    title: "17 sunt",
    content: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elementum tellus. Mauris tincidunt purus id libero varius, id pellentesque leo bibendum. In suscipit urna eget turpis fermentum, sit amet finibus neque commodo.
    </p>
    <p>
      Phasellus dolor nulla, malesuada a eros vitae, pulvinar facilisis mi. Mauris rhoncus rutrum vestibulum. Pellentesque vestibulum ligula eget enim tristique, id sagittis neque commodo. Phasellus in elit velit. Etiam sodales dictum luctus.
    </p>
    <p>
      Nullam aliquam ultricies porta. Etiam a aliquam odio. Duis fermentum, nisi at ultricies aliquam, neque magna bibendum eros, quis feugiat odio enim sit amet leo. Aliquam cursus dolor at lacus consequat ornare non sit amet risus. Nulla facilisi. Curabitur vehicula libero at interdum tincidunt. Quisque vitae bibendum libero. Integer vitae tristique nunc. Duis rutrum lorem eget dapibus vulputate.
    </p>
    <p>
      Donec sed mauris erat. Nam lobortis hendrerit neque. Nulla facilisi. Nulla tellus lorem, imperdiet vitae fringilla vel, lobortis et mi. Aliquam in accumsan arcu, quis tincidunt neque. Sed ligula lectus, posuere sed augue ac, mollis laoreet nulla. Praesent et tempor nibh.
    </p>
    <p>
      In ullamcorper neque et enim tincidunt mollis. Aliquam sed sapien quis massa gravida tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, efficitur et nibh ac, convallis fringilla augue.
    <p>
    `,
  },
];

function Announcements({
  filter,
  announcements,
  fetchAnnouncementsThunk,
  ...props
}) {
  // const [data, setData] = useState([]);
  const [data, handleData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 6;

  const pageNumberLimit = 6;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    fetchAnnouncementsThunk();
  }, []);
  useEffect(() => {
    const value = filter;
    setcurrentPage(1);

    handleData(
      MOCK_DATA.filter((p) => {
        //aici
        return (
          ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
            -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
        );
      })
    );
  }, [filter]);

  // const handleChangeFilterInput = (e) => {
  //   const { value } = e.target;
  //   setcurrentPage(1);

  //   handleData(
  //     announcements.filter((p) => {
  //       return (
  //         ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
  //           -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
  //       );
  //     })
  //   );
  // };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    handleData(MOCK_DATA); //aici
  }, [MOCK_DATA]);

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <AnnouncementsStyle>
      <h2 className="announcements-h2">Announcements</h2>
      {/* <input
        type="text"
        id="search"
        name="search"
        onChange={handleChangeFilterInput}
      ></input> */}

      <div className="announcements-container">
        {currentItems.map((item, index) => (
          <Link key={index} to={`/announcements/${item.id}`} state={item}>
            <div className="announcements-card">
              <div className="announcements-card-image">
                <img
                  width={300}
                  height={200}
                  src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=996"
                  alt="image card"
                />
              </div>
              <div className="announcements-card-tag">HOW TO</div>
              <div className="announcements-card-title">{item.title}</div>
              <div className="announcements-card-author">
                By Grigoras Nadia 2 weeks ago
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          className={`${
            currentPage == pages[0] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handlePrevbtn}
          disabled={
            currentPage == pages[0] || currentItems.length === 0 ? true : false
          }
        >
          Previous posts
        </button>
        <button
          className={`${
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handleNextbtn}
          disabled={
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? true
              : false
          }
        >
          Newer posts
        </button>
      </div>
    </AnnouncementsStyle>
  );
}

const mapStateToProps = (state) => ({
  announcements: state.announcementsState.announcements,
});

const mapDispatchToProps = {
  fetchAnnouncementsThunk: fetchAnnouncementsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
