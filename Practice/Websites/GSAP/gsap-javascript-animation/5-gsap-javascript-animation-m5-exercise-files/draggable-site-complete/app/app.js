/**
 * Created by trshelto on 11/30/15.
 */

var gridContainer = $(".gridContainer");

Draggable.create(".moveAble", {
    bounds: gridContainer,
    edgeResistance:.65,
    cursor: "pointer",
    throwProps: true
    }
);