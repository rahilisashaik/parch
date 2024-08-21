
export function show(ele: HTMLDivElement) {
    ele.style.display = 'block';
    }

export function hide(ele: HTMLDivElement) {
    ele.style.display = 'none';
}

function setItemSelected(ele, bool) {
	if (bool) {
		ele.classList.add('item-selected');
	} else {
		ele.classList.remove('item-selected');
	}
}

function toggle(ele) {
	if (ele.getBoundingClientRect().height > 0) {
		ele.style.display = 'none';
		return false;
	} else {
		ele.style.display = 'block';
		return true;
	}
}

function renderAll() {

	renderer.clear();
	renderer.render(scene, camera);
	updateCubeCamera();
	cubeRenderer.render(cubeScene, cubeCamera);

	renderer.clearDepth();

	if (isInMeasureMode) {
		renderer.clearDepth();
		renderer.render(lineScene, camera);
		renderer.clearDepth();
		renderer.render(spriteScene, camera);
	}
}

