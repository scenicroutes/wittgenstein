// Internal.
import { Zone, ZONE_PROPS, isZone } from './Zone';
import * as Mocks from './mocks';

// Code.
describe('Zone', () => {
  describe('Class', () => {
    it('should be defined', () => {
      expect(Zone).toBeDefined();
    });

    describe('create', () => {
      it('should fail to create a new instance - invalid input', () => {
        expect(Zone.create(null)).toMatchSnapshot();
      });
      it('should create a new instance', () => {
        expect(Zone.create(Mocks.createMockZoneInput())).toMatchSnapshot();
      });
    });
  });

  describe('Validation', () => {
    it('should be defined', () => {
      expect(ZONE_PROPS).toBeDefined();
    });
    it('should match the expected value', () => {
      expect(ZONE_PROPS).toMatchSnapshot();
    });
    it('should be up to date', () => {
      expect(ZONE_PROPS).toEqual(
        Object.keys(Zone.create(Mocks.createMockZoneInput()))
      );
    });
  });

  describe('isZone', () => {
    it('should be defined', () => {
      expect(isZone).toBeDefined();
    });
    it('should handle an invalid input - wrong type', () => {
      expect(isZone('__FAIL__')).toBe(false);
    });
    it('should handle an invalid input - null type', () => {
      expect(isZone(null)).toBe(false);
    });
    it('should handle an invalid input - missing props', () => {
      expect(isZone({})).toBe(false);
    });
    it('should handle an invalid input - strings', () => {
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          id: false,
        })
      ).toBe(false);
    });
    it('should handle an invalid input - arrays', () => {
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          area: false,
        })
      ).toBe(false);
    });
    it('should handle an invalid input - string arrays', () => {
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          area: [false],
        })
      ).toBe(false);
    });
    it('should handle an invalid input - bbox', () => {
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          bbox: false,
        })
      ).toBe(false);
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          bbox: [0, 0, 0],
        })
      ).toBe(false);
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          bbox: [0, 0, 0, false],
        })
      ).toBe(false);
    });
    it('should handle an invalid input - zone', () => {
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          zone: undefined,
        })
      ).toBe(true);
      expect(
        isZone({
          ...Mocks.createMockZoneInput(),
          zone: {},
        })
      ).toBe(false);
    });
  });
});
