import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import '/styles.css'; // adjust the path if needed


const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

/* ===================== 
    Basic Viewer
   ===================== */

const viewer = new Viewer({
    container: document.querySelector('#viewer'),
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
  
    plugins: [
      // MarkersPlugin without default markers
      [MarkersPlugin, {}],
      [VirtualTourPlugin, {
        dataMode: 'client',
        positionMode: 'manual',
        renderMode: '3d',
        maxTextureSize: 4096,
        preload: true,
        showNavigationArrows: false, // Disable default navigation arrows
        nodes: [
            
            /* ===================== 
                First Image
            ===================== */
          {
            id: 'node-1',
            panorama: 'Sakura.jpg',
            caption: 'Sakura <b>&copy; Wiki Media</b>',
            links: [
              { nodeId: 'node-2', position: { yaw: 45, pitch: 0 } },
              { nodeId: 'node-3', position: { yaw: 44.5, pitch: 0 } },
              { nodeId: 'node-4', position: { yaw: 50, pitch: 0 }},
            ],

            /* ============================= 
                Markers in the First Image
            ================================ */

            markers: [
              {
                id: 'circle-image-marker1',
                position: { yaw: 45, pitch: 0 },
                html: '<div class="circle-marker pulse-marker1"><img src="fountain.jpg" alt="marker image"></div>',
                anchor: 'center center',
                tooltip: 'Fountain',
                style: { cursor: 'pointer' }
              },
              {
                id: 'circle-image-marker2',
                position: { yaw: 45.5, pitch: 0 },
                html: `<div class="circle-marker pulse-marker2">
                        <div class="pulse-container">
                            <div class="pulse1"></div>
                            <div class="pulse2"></div>
                            <div class="pulse3"></div>
                        </div>
                        <img src="Scenery.jpg" alt="marker image" />
                        </div>`,
                anchor: 'center center',
                tooltip: 'Scenery',
                style: { cursor: 'pointer' }
              },
              {
                id: 'circle-image-marker3',
                position: { yaw: 44.5, pitch: 0 },
                html: '<div class="circle-marker pulse-marker3"><img src="notredame.jpg" alt="marker image"></div>',
                anchor: 'center center',
                tooltip: 'Notre Dame',
                style: { cursor: 'pointer' }
              },
            ],
          },
          
          
          /* ===================== 
                Second Image
             ===================== */
          {
            id: 'node-2',
            panorama: 'notredame.jpg',
            caption: 'Notre Dame <b>&copy; Wiki Media</b>',
            links: [
              { nodeId: 'node-1', position: { yaw: -0.34, pitch: 0.11 } },
            ],

            /* ============================= 
                Markers in the Second Image
            ================================ */
            markers: [
                {
                  id: 'back-to-node-1',
                  position: { yaw: -49.7, pitch: 0 },
                  html: '<div class="circle-marker pulse-marker1"><img src="Sakura.jpg" alt="marker image"></div>',
                  anchor: 'center center',
                  tooltip: 'Sphere',
                  style: { cursor: 'pointer' }
                },
                {
                    id: 'circle-image-marker2',
                    position: { yaw: 45.5, pitch: 0 },
                    html: `<div class="circle-marker pulse-marker2">
                            <div class="pulse-container">
                                <div class="pulse1"></div>
                                <div class="pulse2"></div>
                                <div class="pulse3"></div>
                            </div>
                            <img src="Scenery.jpg" alt="marker image" />
                            </div>`,
                    anchor: 'center center',
                    tooltip: 'Scenery',
                    style: { cursor: 'pointer' }
                  },
            ],
          },

          /* ===================== 
                Third Image
             ===================== */
          {
            id: 'node-3',
            panorama: 'Scenery.jpg',
            links: [
              { nodeId: 'node-1', position: { yaw: 44.5, pitch: 0 } },
            ],

            /* ============================= 
                Markers in the Third Image
            ================================ */
            markers: [
                {
                  id: 'back-to-node-1',
                  position: { yaw: 45, pitch: 0 },
                  html: '<div class="circle-marker pulse-marker1"><img src="Sakura.jpg" alt="marker image"></div>',
                  anchor: 'center center',
                  tooltip: 'Sphere',
                  style: { cursor: 'pointer' }
                },
            ],
          },

          /* ===================== 
                Fourth Image
             ===================== */
          {
            id: 'node-4',
            panorama: 'fountain.jpg',
            links: [
              { nodeId: 'node-1', position: { yaw: 50, pitch: 0 } },
            ],

            /* ============================= 
                Markers in the Fourth Image
            ================================ */
            markers: [
                {
                  id: 'back-to-node-1',
                  position: { yaw: 45, pitch: 0 },
                  html: '<div class="circle-marker pulse-marker1"><img src="Sakura.jpg" alt="marker image"></div>',
                  anchor: 'center center',
                  tooltip: 'Sphere',
                  style: { cursor: 'pointer' }
                },
            ],
          },
        ],
        startNodeId: 'node-1',
      }],
    ],
  });
  
  const markersPlugin = viewer.getPlugin(MarkersPlugin);
  
  // Marker navigation logic
// Define the mapping of marker IDs to node IDs
const markerToNodeMap = {
    'circle-image-marker1': 'node-4',
    'circle-image-marker2': 'node-3',
    'circle-image-marker3': 'node-2',
    'back-to-node-1': 'node-1',
    'go-to-scenery': 'node-3',
  };
  
  // Marker navigation logic
  markersPlugin.addEventListener('select-marker', ({ marker }) => {
    const virtualTourPlugin = viewer.getPlugin(VirtualTourPlugin);
  
    // Get the target node ID from the map
    const targetNodeId = markerToNodeMap[marker.id];
  
    // Navigate to the target node if it exists in the map
    if (targetNodeId) {
      virtualTourPlugin.setCurrentNode(targetNodeId);
    } else {
      console.warn(`Marker ID '${marker.id}' does not have a mapped node.`);
    }
  });
  
  
  // Log node change events
  viewer.getPlugin(VirtualTourPlugin).addEventListener('node-changed', ({ node, data }) => {
    console.log(`Navigated to ${node.id}`);
    if (data.fromNode) {
      console.log(`Previous node was ${data.fromNode.id}`);
    }
  });
  
  
  // Optional: Add click functionality
  viewer.getPlugin(MarkersPlugin).addEventListener('select-marker', ({ marker }) => {
    if (marker.id === 'circle-image-marker') {
      console.log("Pulsating button clicked!");
      // Additional actions can be added here
    }
  });
  